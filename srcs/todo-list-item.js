export class TodoListItem {
  constructor(list, store, item, updateAll) {
    this.list = list;
    this.store = store;
    this.item = item;
    this.updateAll = updateAll;
    this.id = this.item.id;
    this.text = this.item.text;
    this.isCompleted = this.item.isCompleted;

    const newListItem = document.createElement("li");
    newListItem.classList.add("todo-list__item");

    //좌측 공간(체크 버튼, 텍스트 필드, input필드)
    const newListItemLeft = document.createElement("div");
    newListItemLeft.classList.add("todo-list__item-left");

    //체크 버튼
    const newListItemCheckButton = document.createElement("button");
    newListItemCheckButton.classList.add("todo-list__item-check-button");

    //텍스트 필드
    const newListItemText = document.createElement("div");
    newListItemText.classList.add("todo-list__item-text");

    //input필드(Default : off)
    const newListItemInput = document.createElement("input");
    newListItemInput.classList.add("todo-list__item-input");
    newListItemInput.classList.add("todo-list--switch");

    //삭제 버튼
    const newListItemDeleteButton = document.createElement("button");
    newListItemDeleteButton.classList.add("todo-list__delete-button");
    newListItemDeleteButton.textContent = "X";

    newListItemText.textContent = this.item.text;

    newListItemLeft.append(newListItemCheckButton);
    newListItemLeft.append(newListItemText);
    newListItemLeft.append(newListItemInput);
    newListItem.append(newListItemLeft);
    newListItem.append(newListItemDeleteButton);

    if (this.item.isCompleted) {
      newListItemText.classList.add("todo-list__item-checked");
      newListItemCheckButton.textContent = "✔️";
    } else {
      newListItemText.classList.remove("todo-list__item-checked");
      newListItemCheckButton.textContent = "";
    }

    this.list.appendChild(newListItem);

    this.element = newListItem;
    this.listItemText = newListItemText;
    this.listItemCheckButton = newListItemCheckButton;

    newListItemDeleteButton.addEventListener("click", () => {
      this.store.items = this.store.items.filter(
        (currentItem) => currentItem !== this.item
      );
      this.remove();
      updateAll();
    });

    newListItemCheckButton.addEventListener("click", () => {
      this.item.isCompleted = !this.item.isCompleted;
      updateAll();
    });
  }
  update() {
    manageTodoListItemByChecked();
    manageTodoListItemByFilter();
  }
  remove() {
    this.element.remove();
  }

  /**
   * 체크버튼의 체크 여부에 따라 속성을 변경하는 함수
   */
  manageTodoListItemByChecked() {
    if (this.item.isCompleted) {
      this.listItemText.classList.add("todo-list__item-checked");
      this.listItemCheckButton.textContent = "✔️";
    } else {
      this.listItemText.classList.remove("todo-list__item-checked");
      this.listItemCheckButton.textContent = "";
    }
  }
  /**
   * currentFilter에 따라 속성을 변경하는 함수
   */
  manageTodoListItemByFilter() {
    if (this.store.currentFilter === "all") {
      this.element.remove("todo-list__item--hiding");
    } else if (this.store.currentFilter === "active") {
      if (this.item.isCompleted) {
        this.element.add("todo-list__item--hiding");
      } else {
        this.element.remove("todo-list__item--hiding");
      }
    } else {
      if (this.item.isCompleted) {
        this.element.remove("todo-list__item--hiding");
      } else {
        this.element.add("todo-list__item--hiding");
      }
    }
  }
}
