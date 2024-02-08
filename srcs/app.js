import { Store } from "./store.js";
import { TodoInput } from "./todo-input.js";
import { TodoList } from "./todo-list.js";
import { Toolbar } from "./toolbar.js";

/**
 * 모든 요소들을 가지는 최상위 개체
 */
export class App {
  constructor(root) {
    const store = new Store();

    const updateAll = () => {
      this.update();
    };

    this.todoInput = new TodoInput(root, store, updateAll);
    this.todoList = new TodoList(root, store, updateAll);
    this.toolbar = new Toolbar(root, store, updateAll);
  }
  update() {
    this.todoInput.update();
    this.todoList.update();
    this.toolbar.update();
  }
}
