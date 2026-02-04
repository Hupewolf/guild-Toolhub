const bannerSearch = document.querySelector(".banner-search");
const baseText = "SEARCH FOR TOOLS";
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
            heart.src = "img/trangchuimg/heartactive.svg";
            btn.style.borderColor = "var(--primary-active-color)";
            heart.style.filter = "drop-shadow(0 0 6px var(--primary-active-color))";
        } else {
            heart.src = "img/trangchuimg/heart.svg";
            btn.style.borderColor = "var(--primary-border-color)";
            heart.style.filter = "none";
        }
        heart.style.animation = "none";
        void heart.offsetWidth;
        heart.style.animation = "pop .4s ease";
    };
});

const ITEMS_PER_PAGE = 12;
let currentPage = 1;

const cards = [...document.querySelectorAll('.main-right-card')];
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const pageInfo = document.querySelector('.page-info');

function paginate() {
    const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

    cards.forEach(card => card.style.display = 'none');

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    cards.slice(start, end).forEach(card => {
        card.style.display = 'flex';
    });

    pageInfo.innerText =
        `${String(currentPage).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        paginate();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < Math.ceil(cards.length / ITEMS_PER_PAGE)) {
        currentPage++;
        paginate();
    }
});

paginate();