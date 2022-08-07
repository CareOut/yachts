const burgerOpen = document.querySelector(".menu-burger");
const burgerClose = document.querySelector(".menu-burger__close");
const menu = document.querySelector(".menu-body");

burgerOpen.addEventListener("click", () => {
  menu.style.display = "block";
});

burgerClose.addEventListener("click", () => {
  menu.style.display = "none";
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

const city = document.querySelectorAll(".choice__city");
const sochy = document.querySelector(".choice-map-sochi");
const crimea = document.querySelector(".choice-map-crimea");

city.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.textContent === "Крым") {
      item.classList.toggle("yellow");
      sochy.style.display = "none";
      crimea.style.display = "flex";
    } else if (item.textContent === "Сочи") {
      item.classList.toggle("yellow");
      crimea.style.display = "none";
      sochy.style.display = "flex";
    }
  });
});
