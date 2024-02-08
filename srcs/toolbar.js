import { Counter } from "./counter.js";
import { Option } from "./option.js";
import { ClearButton } from "./clear-button.js";

export class Toolbar {
  constructor(root, store, updateAll) {
    this.toolbar = root.querySelector(".todo-list__menu");
    // const counter = root.querySelector(".menu__count");
    // const optionAll = root.querySelector(".control-all");
    // const optionActive = root.querySelector(".control-active");
    // const optionCompleted = root.querySelector(".control-completed");
    // const clearCompleted = root.querySelector(".menu-clear");

    this.store = store;

    this.counter = new Counter(root, store, updateAll);
    this.option = new Option(root, store, updateAll);
    this.clearButton = new ClearButton(root, store, updateAll);
  }

  update() {
    if (this.store.items.length > 0) {
      this.toolbar.classList.remove("todo-list__menu--hiding");
    } else {
      this.toolbar.classList.add("todo-list__menu--hiding");
    }
    this.counter.update();
    this.option.update();
    this.clearButton.update();
  }
}
