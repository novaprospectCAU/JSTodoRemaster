export class TodoListItem {
  constructor(list, store, item, updateAll) {
    this.list = list;
    this.store = store;
    this.item = item;
    this.updateAll = updateAll;

    this.id = this.item.id;
    this.text = this.item.text;
    this.isCompleted = this.item.isCompleted;

    this.element = this.init();

    this.listItemText = this.element.querySelector(".todo-list__item-text");
    this.listItemCheckButton = this.element.querySelector(
      ".todo-list__item-check-button"
    );
  }
  update() {
    manageTodoListItemByCheck();
  }
  remove() {
    this.element.remove();
  }
  /**
   * 새로운 개체를 대입해서 변경하는 함수
   */
  fixAttributes(item) {
    this.item = item;
    console.log(this.item);
    this.id = this.item.id;
    this.text = this.item.text;
    this.isCompleted = this.item.isCompleted;

    this.listItemText.textContent = this.item.text;
    console.log(this.listItemText.textContent);
    if (this.isCompleted) {
      this.listItemText.classList.add("todo-list__item-checked");
      this.listItemCheckButton.textContent = "✔️";
    } else {
      this.listItemText.classList.remove("todo-list__item-checked");
      this.listItemCheckButton.textContent = "";
    }
  }
  /**
   * 체크버튼의 체크 여부에 따라 속성을 변경하는 함수
   */
  manageTodoListItemByCheck() {
    if (this.isCompleted) {
      this.listItemText.classList.add("todo-list__item-checked");
      this.listItemCheckButton.textContent = "✔️";
    } else {
      this.listItemText.classList.remove("todo-list__item-checked");
      this.listItemCheckButton.textContent = "";
    }
  }
  /**
   * 리스트 아이템을 만드는 함수(생성자에서만 사용)
   */
  init() {
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

    if (this.isCompleted) {
      newListItemText.classList.add("todo-list__item-checked");
      newListItemCheckButton.textContent = "✔️";
    } else {
      newListItemText.classList.remove("todo-list__item-checked");
      newListItemCheckButton.textContent = "";
    }

    newListItemDeleteButton.addEventListener("click", () => {
      this.store.items = this.store.items.filter(
        (currentItem) => currentItem !== this.item
      );
      this.remove();
      this.updateAll();
    });

    newListItemCheckButton.addEventListener("click", () => {
      this.isCompleted = !this.isCompleted;
      this.updateAll();
    });

    newListItemLeft.append(newListItemCheckButton);
    newListItemLeft.append(newListItemText);
    newListItemLeft.append(newListItemInput);
    newListItem.append(newListItemLeft);
    newListItem.append(newListItemDeleteButton);

    this.list.prepend(newListItem);
    return newListItem;
  }
}
