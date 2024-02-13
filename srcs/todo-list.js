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
    if (this.store.items.length > this.todoListItems.length) {
      this.addListItemsByStoreItems();
    } else if (this.store.items.length < this.todoListItems.length) {
      this.deleteListItemsByStoreItems();
    }
    for (let index = 0; index < this.store.items.length; index++) {
      this.todoListItems[index].update(this.store.items[index]);
    }
  }

  /**
   * 실제 아이템이 삭제된 경우 todoListItems의 element를 제거하는 함수
   */
  deleteListItemsByStoreItems() {
    //먼저 넘치는 자리만큼 제거한다.
    const trash = this.todoListItems.splice(this.store.items.length);
    for (const deleteItem of trash) {
      deleteItem.remove();
    }
    //제거한 후 값을 하나씩 넣어주고 업데이트한다.
    for (let index = 0; index < this.store.items.length; index++) {
      this.todoListItems[index].update(this.store.items[index]);
    }
  }
  /**
   * 실제 아이템이 추가된 경우 todoListItems에 element를 추가하는 함수
   */
  addListItemsByStoreItems() {
    if (this.store.items.length > this.todoListItems.length) {
      let index = 0;
      for (; index < this.todoListItems.length; index++) {
        this.todoListItems[index].update(this.store.items[index]);
      }
      for (; index < this.store.items.length; index++) {
        this.todoListItems.push(
          new TodoListItem(
            this.element,
            this.store,
            this.store.items[index],
            this.updateAll
          )
        );
      }
    }
  }
}
