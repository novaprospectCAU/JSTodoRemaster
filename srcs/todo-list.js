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
    // this.manageTodoListItemByFilter();
    console.log("before update");
    console.log("store length : ", this.store.items.length);
    console.log("list item length : ", this.todoListItems.length);
    if (this.store.items.length > this.todoListItems.length) {
      this.addListItemsByStoreItems();
      console.log("store > list items");
      console.log("store length : ", this.store.items.length);
      console.log("list item length : ", this.todoListItems.length);
    } else if (this.store.items.length < this.todoListItems.length) {
      this.deleteListItemsByStoreItems();
      console.log("store < list items");
      console.log("store length : ", this.store.items.length);
      console.log("list item length : ", this.todoListItems.length);
    }
  }

  /**
   * 실제 아이템이 삭제된 경우 todoListItems의 element를 제거하는 함수
   */
  deleteListItemsByStoreItems() {
    for (
      let index = this.store.items.length;
      index < this.todoListItems.length;
      index++
    ) {
      this.todoListItems[index].remove();
    }
    this.todoListItems.splice(0, this.store.items.length);
    for (let index = 0; index < this.todoListItems.length; index++) {
      this.todoListItems[index].id = this.store.items[index].id;
      this.todoListItems[index].text = this.store.items[index].text;
      this.todoListItems[index].isCompleted =
        this.store.items[index].isCompleted;
    }
  }
  /**
   * 실제 아이템이 추가된 경우 todoListItems에 element를 추가하는 함수
   */
  addListItemsByStoreItems() {
    for (const storeItem of this.store.items) {
      if (
        this.todoListItems.filter((item) => item.id === storeItem.id).length ===
        0
      ) {
        this.todoListItems.unshift(
          new TodoListItem(this.element, this.store, storeItem, this.updateAll)
        );
      }
    }
  }
}
