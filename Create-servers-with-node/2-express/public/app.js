const btnEl = document.querySelector(".btn");
const navbarEl = document.querySelector(".navbar");
const navBtn = document.getElementById("nav-btn");

btnEl.addEventListener("click", () => {
    navbarEl.classList.add("active");
});

navBtn.addEventListener("click", () => {
    navbarEl.classList.remove("active");
});