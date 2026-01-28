const params = new URLSearchParams(window.location.search);
const keyword = (params.get("q") || "").toLowerCase();
document.getElementById("searchTitle").innerHTML =
    `Kết quả cho "<b>${keyword}</b>"`;

function highlight(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<span class="highlight">$1</span>`);
}

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