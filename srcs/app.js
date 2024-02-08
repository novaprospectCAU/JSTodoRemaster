import { Store } from "./store.js";
import { TodoInput } from "./todo-input.js";
import { TodoList } from "./todo-list.js";

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
  }
  update() {
    this.todoInput.update();
    this.todoList.update();
  }
}
