function searchProduct(value) {
    value = value.toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const name = card.dataset.name || "";
        card.style.display = name.includes(value) ? "block" : "none";
    });
}
