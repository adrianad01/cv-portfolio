import darkTheme from "./dark_mode.js";

darkTheme(".dark-theme-btn", "dark-mode");

const menu = document.querySelector(".menu");
const btn = document.querySelector(".burguer");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
