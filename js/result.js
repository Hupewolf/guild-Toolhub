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

const params = new URLSearchParams(window.location.search);
const keyword = (params.get("q") || "").toLowerCase();
document.getElementById("searchTitle").innerHTML =
    `Kết quả cho "<b>${keyword}</b>"`;

let found = 0;

cards.forEach(card => {
    const titleEl = card.querySelector(".right-card-text1");
    const descEl  = card.querySelector(".right-card-text2");

    const title = titleEl.textContent.toLowerCase();
    const desc  = descEl.textContent.toLowerCase();

    if (title.includes(keyword) || desc.includes(keyword)) {
        card.style.display = "flex";

        titleEl.innerHTML = highlight(titleEl.textContent, keyword);
        descEl.innerHTML  = highlight(descEl.textContent, keyword);

        found++;
    } else {
        card.style.display = "none";
    }
});

if (found === 0) {
    document.querySelector(".main-right-card-box").innerHTML =
        `<p class="empty">Không tìm thấy kết quả</p>`;
}