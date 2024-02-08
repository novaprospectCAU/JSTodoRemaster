export class ClearButton {
  constructor(root, store, updateAll) {
    this.clearButton = root.querySelector(".menu-clear");
    this.store = store;

    this.clearButton.addEventListener("click", () => {
      this.store.items = this.store.items.filter((item) => !item.isCompleted);
      updateAll();
    });
  }
  update() {
    if (this.store.items.filter((item) => item.isCompleted).length === 0) {
      this.clearButton.classList.add("menu-clear--hiding");
    } else {
      this.clearButton.classList.remove("menu-clear--hiding");
    }
  }
}
