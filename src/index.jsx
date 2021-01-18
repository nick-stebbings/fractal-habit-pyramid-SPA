import { Routes, DefaultRoute } from "./view/routes";
import "./assets/scss/app.scss";

const $root = document.querySelector("body");
m.route($root, DefaultRoute, Routes);