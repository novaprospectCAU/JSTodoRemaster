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
    for (const todoListItem of this.todoListItems) {
      todoListItem.remove();
    }

    this.todoListItems = [];

    //새로운 TodoListItem들을 만든다.
    for (const item of this.store.items) {
      const listItem = new TodoListItem(
        this.element,
        this.store,
        item,
        this.updateAll
      );
      this.todoListItems.push(listItem);
    }
  }
}
