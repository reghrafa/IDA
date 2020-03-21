import {
  types,
  Instance,
  SnapshotIn,
  SnapshotOut,
  getParent,
  getRoot
} from "mobx-state-tree";
import EduTodoModel, { IEduTodoModel } from "../models/EduTodoModel";
import EduTodoCategoryModel, {
  IEduTodoCategoryModel
} from "../models/EduTodoCategoryModel";
import { IEduRootStore } from "./EduRootStore";

const EduTodoStore = types
  .model({
    todos: types.map(EduTodoModel),
    todoCategories: types.array(EduTodoCategoryModel)
  })
  .actions(self => ({
    setTodo(todo: IEduTodoModel) {
      self.todos.put(todo);
    },
    setTodos(todos: IEduTodoModel[]) {
      self.todos.replace(todos);
    },
    addTodos(todos: IEduTodoModel[]) {
      self.todos.merge(todos);
    },
    setTodoCategories(todoCategories: IEduTodoCategoryModel[]) {
      self.todos.replace(todoCategories);
    }
  }))
  .views(self => {
    const rootStore: IEduRootStore = getRoot(self);
    const activeCustomerSegmentID: string =
      rootStore.User.settings.customerSegment?.id || "";
    const fetchTodo = () => {};
    const fetchTodos = () => {};
    const fetchTodoCategories = () => {};
    return {
      get todolist() {
        fetchTodoCategories();
        return self.todoCategories;
      },
      getTodo(todoId: string) {
        fetchTodo();
        return self.todos.get(todoId);
      }
    };
  })
  .named("EduTodoStore");

export default EduTodoStore;

export interface IEduTodoStore extends Instance<typeof EduTodoStore> {}
export interface IEduTodoStoreSnapshotIn
  extends SnapshotIn<typeof EduTodoStore> {}
export interface IEduTodoStoreSnapshotOut
  extends SnapshotOut<typeof EduTodoStore> {}
