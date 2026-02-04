document.addEventListener("click", function (e) {
    const heartBtn = e.target.closest(".heart-btn");
    if (!heartBtn) return;
    const card = heartBtn.closest(".main-right-card");
    if (!card) return;
    card.style.display = "none"; 
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