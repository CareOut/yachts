const burgerOpen = document.querySelector(".menu-burger");
const burgerClose = document.querySelector(".menu-burger__close");
const menu = document.querySelector(".menu-body");

burgerOpen.addEventListener("click", () => {
  menu.style.display = "block";
});

burgerClose.addEventListener("click", () => {
  menu.style.display = "none";
});

const btn = document.querySelector(".routes__btn");
const moreRoutes = document.querySelector(".items-bottom");

btn.addEventListener("click", () => {
  moreRoutes.classList.toggle("show");
  if (btn.textContent === "Показать больше маршрутов") {
    btn.textContent = "Свернуть";
  } else if (btn.textContent === "Свернуть") {
    btn.textContent = "Показать больше маршрутов";
  }
});
