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
    this.displayItemsByFilter();
    if (this.store.items.length > this.todoListItems.length) {
      this.addListItemsByStoreItems();
    } else if (this.store.items.length < this.todoListItems.length) {
      this.deleteListItemsByStoreItems();
    }
  }

  /**
   * 실제 아이템이 삭제된 경우 todoListItems의 element를 제거하는 함수
   */
  deleteListItemsByStoreItems() {
    //먼저 넘치는 자리만큼 제거한다.
    const trash = this.todoListItems.splice(this.store.items.length);
    //제거한 후 값을 하나씩 넣어주고 업데이트한다.
    for (let index = 0; index < this.store.items.length; index++) {
      this.todoListItems[index].fixAttributes(this.store.items[index]);
    }
    this.updateAll();
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
  /**
   * 필터에 따라 보여주는 리스트 아이템을 고르는 함수
   */
  displayItemsByFilter() {
    if (this.store.currentFilter === "all") {
      for (const listItem of this.todoListItems) {
        listItem.element.classList.remove("todo-list__item--hiding");
      }
    } else if (this.store.currentFilter === "active") {
      for (const listItem of this.todoListItems) {
        if (listItem.isChecked) {
          listItem.element.classList.add("todo-list__item--hiding");
        } else {
          listItem.element.classList.remove("todo-list__item--hiding");
        }
      }
    } else {
      for (const listItem of this.todoListItems) {
        if (listItem.isChecked) {
          listItem.element.classList.remove("todo-list__item--hiding");
        } else {
          listItem.element.classList.add("todo-list__item--hiding");
        }
      }
    }
  }
}
