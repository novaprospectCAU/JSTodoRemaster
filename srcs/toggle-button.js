export class ToggleButton {
  constructor(root, store, updateAll) {
    this.store = store;
    this.toggleButton = document.querySelector(".check-all");

    this.toggleButton.addEventListener("click", () => {
      if (
        this.store.items.filter((storeItem) => !storeItem.isCompleted).length >
        0
      ) {
        for (const item of this.store.items) {
          item.isCompleted = true;
        }
      } else {
        for (const item of this.store.items) {
          item.isCompleted = false;
        }
      }
      updateAll();
    });
  }
  update() {
    console.log(this.store.items.length);
    if (this.store.items.length === 0) {
      this.toggleButton.classList.add("check-all--initial");
      this.toggleButton.classList.remove("check-all--off");
      this.toggleButton.classList.remove("check-all--on");
    } else {
      if (this.store.items.filter((item) => !item.isCompleted).length > 0) {
        this.toggleButton.classList.remove("check-all--initial");
        this.toggleButton.classList.add("check-all--off");
        this.toggleButton.classList.remove("check-all--on");
      } else {
        this.toggleButton.classList.remove("check-all--initial");
        this.toggleButton.classList.remove("check-all--off");
        this.toggleButton.classList.add("check-all--on");
      }
    }
  }
}
