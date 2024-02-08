/**
 * 새로운 입력을 받는 개체
 */
export class TodoInput {
  constructor(root, store, updateAll) {
    const todoInput = root.querySelector(".todo-input");

    todoInput.addEventListener("keydown", (e) => {
      //1
      if (e.key === "Enter" && !e.isComposing) {
        const string = todoInput.value.trim();
        if (string !== "") {
          //2
          store.items.unshift({ text: string, isCompleted: false });
          todoInput.value = "";
          //3
          updateAll();
        }
      }
    });
  }
  update() {}
}
