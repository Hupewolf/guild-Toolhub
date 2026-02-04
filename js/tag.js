const MAX_TAG = 3;

document.querySelectorAll('.main-right-card').forEach(card => {
    const tagBox = card.querySelector('.tag-box');
    if (!tagBox) return;

    const cats = card.dataset.category.split(',');
    tagBox.innerHTML = '';

    cats.slice(0, MAX_TAG).forEach(c => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.innerText = c.toUpperCase();
        tagBox.appendChild(span);
    });

    if (cats.length > MAX_TAG) {
        const more = document.createElement('span');
        more.className = 'tag more';
        more.innerText = `+${cats.length - MAX_TAG}`;
        tagBox.appendChild(more);
    }
});

const searchInput = document.querySelector('.head-search');
const cardS = document.querySelectorAll('.main-right-card');

function getChecked(selector) {
    return [...document.querySelectorAll(selector + ':checked')]
        .map(el => el.value);
}

function filterTools() {
    const keyword = searchInput.value.toLowerCase();
    const prices = getChecked('.filter-price');
    const categories = getChecked('.filter-category');

    cardS.forEach(card => {
        const name = card.dataset.name;
        const price = card.dataset.price;
        const cats = card.dataset.category.split(',');

        const matchName =
            keyword === '' || name.includes(keyword);

        const matchPrice =
            prices.length === 0 || prices.includes(price);

        const matchCategory =
            categories.length === 0 ||
            categories.some(c => cats.includes(c));

        card.style.display =
            matchName && matchPrice && matchCategory
                ? 'flex'
                : 'none';
    });
}

searchInput.addEventListener('input', filterTools);
document.querySelectorAll('.filter-price, .filter-category')
    .forEach(cb => cb.addEventListener('change', filterTools));