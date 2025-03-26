const nav = document.querySelector("nav");
const mobilenav = document.querySelector("nav.mobile-nav");
const menuicon = document.querySelector(".menu-icon");
const closeicon = document.querySelector(".mobile-menu-container .close-icon");
const mobilemenucontainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 60) {
    nav.classList.add("scrolled");
    mobilenav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobilenav.classList.remove("scrolled");
  }
});

menuicon.addEventListener("click", function () {
  mobilemenucontainer.classList.add("active");
});

closeicon.addEventListener("click", function () {
  mobilemenucontainer.classList.remove("active");
});
