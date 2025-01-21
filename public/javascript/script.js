const burger = document.querySelector(".burger");
const off = document.querySelector(".off-screen");
const offNav = document.querySelector(".off-nav");
const logo = document.querySelector(".logo");

burger.addEventListener('click', () => {
    off.classList.toggle("active");
    offNav.classList.toggle("active");
    logo.classList.toggle("active");
})