// function handleSearch(input) {
//     input.addEventListener("keydown", (e) => {
//         if (e.key === "Enter") {
//             const keyword = input.value.trim();
//             if (!keyword) return;
//             window.location.href = `result.html?q=${encodeURIComponent(keyword)}`;
//         }
//     });
// }
// document.querySelectorAll(".head-search, .head-search2, .banner-search")
//     .forEach(handleSearch);

function handleSearch(input) {

    input.addEventListener("input", (e) => {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }, true);

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            const keyword = input.value.trim();
            if (!keyword) return;
            window.location.href =
                `result.html?q=${encodeURIComponent(keyword)}`;
        }
    });
}

document.querySelectorAll(".head-search, .head-search2, .banner-search")
    .forEach(handleSearch);