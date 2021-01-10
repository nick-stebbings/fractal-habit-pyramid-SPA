import { Routes, DefaultRoute } from "./view/routes";
import "./scss/app.scss";

const $root = document.body.querySelector("#app");
m.route($root, DefaultRoute, Routes);