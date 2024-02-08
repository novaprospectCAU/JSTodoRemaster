export class TodoListItem {
  constructor(list, store, item, updateAll) {
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

    newListItemText.textContent = item.text;

    newListItemLeft.append(newListItemCheckButton);
    newListItemLeft.append(newListItemText);
    newListItemLeft.append(newListItemInput);
    newListItem.append(newListItemLeft);
    newListItem.append(newListItemDeleteButton);

    if (item.isComplete === true) {
      newListItemText.classList.add("todo-list__item-checked");
      newListItemCheckButton.textContent = "✔️";
    } else {
      newListItemText.classList.remove("todo-list__item-checked");
      newListItemCheckButton.textContent = "";
    }

    list.appendChild(newListItem);
    this.element = newListItem;

    newListItemDeleteButton.addEventListener("click", () => {
      store.items = store.items.filter((currentItem) => currentItem !== item);
      updateAll();
    });
  }
  update() {}
  remove() {
    this.element.remove();
  }
}
