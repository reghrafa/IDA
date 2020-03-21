import {
  types,
  Instance,
  SnapshotOut,
  SnapshotIn,
  flow
} from "mobx-state-tree";
import ListableStore from "./Listable";
import { getTodos, getTodoCategories } from "../api/api";
import TodoType, { processTodos, ITodoType } from "../models/TodoType";
import TodoCategoryType, {
  processTodoCategories,
  ITodoCategoryType
} from "../models/TodoCategoryType";
import { sendTodoEvent } from "../../helpers/analyticsEvents";

export interface ISectionedTodo {
  title: string;
  imageActive: string;
  imageMonochrome: string;
  todos: ITodoType[];
}

const ListabelTodoStore = ListableStore(getTodos, TodoType, processTodos);

const TodoStore = types
  .model({
    todos: types.optional(ListabelTodoStore, () => ListabelTodoStore.create()),
    todoCategories: types.optional(
      ListableStore(getTodoCategories, TodoCategoryType, processTodoCategories),
      {}
    ),
    todoChecks: types.map(
      types.model({ id: types.identifier, checked: types.boolean })
    ),
    todoNotes: types.map(
      types.model({ id: types.identifier, note: types.string })
    ),
    todoSectionsCollapsState: types.map(
      types.model({ id: types.identifier, collapsed: types.boolean })
    )
  })
  .views(self => ({
    get progress(): number {
      const checked = (() => {
        let c = 0;
        self.todoChecks.forEach(x => {
          if (x.checked) c++;
        });
        return c;
      })();
      if (checked === 0) return 0;
      if (self.todos.list.length === 0) return 0;
      return Math.round((checked / self.todos.list.length) * 100);
    },
    get sectionedTodoList(): ISectionedTodo[] {
      return self.todoCategories.list.map((tc: ITodoCategoryType) => ({
        title: tc.title,
        imageActive: tc.imageActive,
        imageMonochrome: tc.imageMonochrome,
        todos: self.todos.list.filter((s: ITodoType) => s.category === tc.id)
      }));
    },
    get nextNotDoneTodo(): ITodoType | null {
      const sortedTodoArray = self.todos.list.sort(
        (a: ITodoType, b: ITodoType) => a.index - b.index
      );
      let currentTodo = null;
      for (let i = 0; i < self.todos.list.length; i++) {
        currentTodo = sortedTodoArray[i];
        if (!self.todoChecks.get(currentTodo.id)) {
          return currentTodo;
        }
      }
      return null;
    },
    get initStatus(): "pending" | "done" | "error" | "empty" {
      if (self.todos.state === "empty" && self.todoCategories.state === "empty")
        return "empty";
      if (self.todos.state === "done" && self.todoCategories.state === "done")
        return "done";
      if (self.todos.state === "error" || self.todoCategories.state === "error")
        return "error";
      return "pending";
    }
  }))
  .actions(self => ({
    collapse(index: number) {
      self.todoSectionsCollapsState.put({ id: "" + index, collapsed: true });
    },
    expand(index: number) {
      self.todoSectionsCollapsState.put({ id: "" + index, collapsed: false });
    },
    check(id: string) {
      sendTodoEvent(id, "Check");
      self.todoChecks.put({ id: id, checked: true });
    },
    uncheck(id: string) {
      sendTodoEvent(id, "Uncheck");
      self.todoChecks.put({ id: id, checked: false });
    },
    setNote(note: string, id: string) {
      self.todoNotes.put({ id, note });
    },
    initWithLanguage: flow(function* initWithLanguage(lang: string) {
      yield self.todos.setListWithLanguage(lang);
      yield self.todoCategories.setListWithLanguage(lang);
    })
  }))
  .named("TodoStore");

export default TodoStore;

export interface ITodoStore extends Instance<typeof TodoStore> { }
export interface ITodoStoreSnapshotIn extends SnapshotIn<typeof TodoStore> { }
export interface ITodoStoreSnapshotOut extends SnapshotOut<typeof TodoStore> { }
