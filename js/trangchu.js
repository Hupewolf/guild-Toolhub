const bannerSearch = document.querySelector(".banner-search");
const baseText = "TÌM KIẾM CÔNG CỤ";
let dots = 0;

setInterval(() => {
    dots = (dots + 1) % 4;
    bannerSearch.placeholder = baseText + ".".repeat(dots);
}, 500);



document.querySelectorAll(".heart-btn").forEach(btn => {
    let isLiked = false;
    const heart = btn.querySelector("img");

    btn.onclick = () => {
        isLiked = !isLiked;
        if (isLiked) {
            heart.src = "img/trangchuimg/saveActive.svg";
            btn.style.borderColor = "var(--primary-active-color)";
            heart.style.filter = "drop-shadow(0 0 6px var(--primary-active-color))";
        } else {
            heart.src = "img/trangchuimg/save.svg";
            btn.style.borderColor = "var(--primary-border-color)";
            heart.style.filter = "none";
        }
        heart.style.animation = "none";
        void heart.offsetWidth;
        heart.style.animation = "pop .4s ease";
    };
});