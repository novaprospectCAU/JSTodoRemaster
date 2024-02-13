export class Option {
  constructor(root, store, updateAll) {
    this.store = store;
    this.filterAll = root.querySelector(".control-all");
    this.filterActive = root.querySelector(".control-active");
    this.filterCompleted = root.querySelector(".control-completed");
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
      this.filterAll.classList.remove("control-button--inactive");
      this.filterActive.classList.add("control-button--inactive");
      this.filterCompleted.classList.add("control-button--inactive");
    } else if (this.store.currentFilter === "active") {
      this.filterAll.classList.add("control-button--inactive");
      this.filterActive.classList.remove("control-button--inactive");
      this.filterCompleted.classList.add("control-button--inactive");
    } else {
      this.filterAll.classList.add("control-button--inactive");
      this.filterActive.classList.add("control-button--inactive");
      this.filterCompleted.classList.remove("control-button--inactive");
    }
  }
}
