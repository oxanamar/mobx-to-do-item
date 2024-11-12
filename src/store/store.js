import { v4 as uuidv4 } from "uuid";
import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Todo {
  id = uuidv4();
  title = "";
  completed = false;

  constructor(title) {
    makeAutoObservable(this);
    this.title = title;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push(new Todo(title));
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export const todoStore = new TodoStore();
export const TodoStoreContext = createContext(todoStore);
