const burgerOpen = document.querySelector(".menu-burger");
const burgerClose = document.querySelector(".menu-burger__close");
const menu = document.querySelector(".menu-body");

burgerOpen.addEventListener("click", () => {
  menu.style.display = "block";
});

burgerClose.addEventListener("click", () => {
  menu.style.display = "none";
});

const modalBron = document.querySelector(".modal-bron");
const buttonBron = document.querySelectorAll(".button__bron");
const bronClose = document.querySelector(".cross__img");

buttonBron.forEach((item) => {
  item.addEventListener("click", () => {
    modalBron.style.display = "flex";
  });
});

bronClose.addEventListener("click", () => {
  modalBron.style.display = "none";
});

const modalZayavka = document.querySelector(".modal-zayavka");
const zayavkaClose = document.querySelector(".zayavka");
const menuZayavka = document.querySelector(".menu__btn");

menuZayavka.addEventListener("click", () => {
  modalZayavka.style.display = "flex";
});

zayavkaClose.addEventListener("click", () => {
  modalZayavka.style.display = "none";
});
