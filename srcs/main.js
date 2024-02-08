import { App } from "./app.js";
import { TodoInput } from "./todo-input.js";

const apps = document.querySelectorAll(".main");

const app1 = new App(apps[0]);
const app2 = new App(apps[1]);
