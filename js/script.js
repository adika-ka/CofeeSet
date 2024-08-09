// Бургер меню
const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
iconMenu.addEventListener("click", (e) => {
  iconMenu.classList.toggle("menu__icon--active");
  menuBody.classList.toggle("header__menu--active");
  body.classList.toggle("body--active");
  wrapper.classList.toggle("wrapper--active");
});
