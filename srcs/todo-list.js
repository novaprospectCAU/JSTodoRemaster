import { TodoListItem } from "./todo-list-item.js";

/**
 * 리스트 아이템을 돔으로 표시하기 위한 개체
 */
export class TodoList {
  constructor(root, store, updateAll) {
    const todoList = root.querySelector(".todo-list");

    this.element = todoList;
    this.store = store;
    this.todoListItems = [];
    this.updateAll = updateAll;
  }

  update() {
    //원래 만들었던 TodoListItem들을 하나씩 삭제한다
    if (this.store.items.length > this.todoListItems.length) {
    } else if (this.store.items.length < this.todoListItems.length) {
    }
  }
}
