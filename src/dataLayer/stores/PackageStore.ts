import { types } from "mobx-state-tree";
import ListableStore from "./Listable";
import { getTodos, getTodoCategories } from "../api/api";
import TodoType, { processTodos, ITodo } from "../models/TodoType";
import TodoCategoryType, {
  processTodoCategories,
  ITodoCategory
} from "../models/TodoCategoryType";

export interface ISectionedTodo {
  title: string;
  imageActive: string;
  imageMonochrome: string;
  todos: ITodo[];
}

const TodoStore = types
  .model({
    todos: types.optional(ListableStore(getTodos, TodoType, processTodos), {}),
    todoCategories: types.optional(
      ListableStore(getTodoCategories, TodoCategoryType, processTodoCategories),
      {}
    ),
    todoCheckList: types.array(types.string)
  })
  .views(self => ({
    get progress(): number {
      if (self.todoCheckList.length === 0) return 0;

      const a = self.todos.list.length || 0;
      const b = self.todoCheckList.length;
      return a / b;
    },
    get sectionedTodoList(): ISectionedTodo[] {
      return self.todoCategories.list.map((tc: ITodoCategory) => ({
        title: tc.title,
        imageActive: tc.imageActive,
        imageMonochrome: tc.imageMonochrome,
        todos: self.todos.list.filter((s: ITodo) => s.category === tc.id)
      }));
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
    isChecked(id: string) {
      return self.todoCheckList.includes(id);
    },
    check(id: string) {
      if (!self.todoCheckList.includes(id)) {
        self.todoCheckList.push(id);
      }
    },
    uncheck(id: string) {
      if (self.todoCheckList.includes(id)) {
        self.todoCheckList.remove(id);
      }
    },
    initWithLanguage(lang: string) {
      self.todos.setListWithLanguage(lang);
      self.todoCategories.setListWithLanguage(lang);
    }
  }))
  .named("TodoStore");

export default TodoStore;
