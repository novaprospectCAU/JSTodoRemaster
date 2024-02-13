export class Option {
  constructor(root, store, updateAll) {
    this.store = store;
    this.filterAll = document.querySelector(".control-all");
    this.filterActive = document.querySelector(".control-active");
    this.filterCompleted = document.querySelector(".control-completed");
    this.filterAll.addEventListener("click", () => {
      this.store.currentFilter = "all";
      updateAll();
    });
    this.filterActive.addEventListener("click", () => {
      this.store.currentFilter = "active";
      updateAll();
    });
    this.filterCompleted.addEventListener("click", () => {
      this.store.currentFilter = "completed";
      updateAll();
    });
  }
  update() {
    if (this.store.currentFilter === "all") {
      this.filterAll.classList.remove("control-button--unactive");
      this.filterActive.classList.add("control-button--unactive");
      this.filterCompleted.classList.add("control-button--unactive");
    } else if (this.store.currentFilter === "active") {
      this.filterAll.classList.add("control-button--unactive");
      this.filterActive.classList.remove("control-button--unactive");
      this.filterCompleted.classList.add("control-button--unactive");
    } else {
      this.filterAll.classList.add("control-button--unactive");
      this.filterActive.classList.add("control-button--unactive");
      this.filterCompleted.classList.remove("control-button--unactive");
    }
  }
}
