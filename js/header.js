const searchIcon = document.getElementById("head-search-icon");
const searchBox = document.querySelector(".head-search-box2");

// bấm icon kính lúp hiện thanh search
searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBox.classList.toggle("head-search-active");
    searchIcon.classList.add("head-search-hide");
    searchBox.querySelector("input")?.focus();
});

// bấm bất cứ đâu trừ thanh search sẽ mất thanh search
document.addEventListener("click", (e) => {
    if (!searchBox.contains(e.target) && !searchIcon.contains(e.target)) {
        searchBox.classList.remove("head-search-active");
        searchIcon.classList.remove("head-search-hide");
    }
});

const hamburgerIcon = document.getElementById("hamburger");
const hamburgerxIcon = document.querySelector(".hamburgerx");
const hamburgerNavBox = document.getElementById("head-nav-box");

hamburgerIcon.addEventListener("click", () => {
    hamburgerIcon.classList.add("hamburger-hide");
    hamburgerxIcon.classList.add("hamburger-active");
    hamburgerNavBox.classList.add("hamburger-active");
});

hamburgerxIcon.addEventListener("click", () => {
    hamburgerIcon.classList.remove("hamburger-hide");
    hamburgerxIcon.classList.remove("hamburger-active");
    hamburgerNavBox.classList.remove("hamburger-active");
});