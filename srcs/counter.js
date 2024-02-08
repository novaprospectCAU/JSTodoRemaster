export class Counter {
  constructor(root, store, updateAll) {
    this.store = store;
    this.counter = root.querySelector(".menu__count");
  }
  update() {
    const count = this.store.items.filter((item) => !item.isCompleted).length;
    if (count === 1) {
      this.counter.textContent = `${count} item left`;
    } else {
      this.counter.textContent = `${count} items left`;
    }
  }
}
