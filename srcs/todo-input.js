/**
 * 새로운 입력을 받는 개체
 */
export class TodoInput {
  constructor(root, store, updateAll) {
    const todoInput = root.querySelector(".todo-input");
    this.store = store;

    todoInput.addEventListener("keydown", (e) => {
      //1
      if (e.key === "Enter" && !e.isComposing) {
        const string = todoInput.value.trim();
        if (string !== "") {
          //2
          //id는 제일 마지막 원소의 id + 1이다. (if sort기능이 있다면 에러 발생 여지 존재)
          let newItem = {
            id: this.store.id,
            text: string,
            isCompleted: false,
          };
          store.items.unshift(newItem);
          this.store.id++;
          todoInput.value = "";
          //3
          updateAll();
        }
      }
    });
  }
  update() {}
}
