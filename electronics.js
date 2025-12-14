// JavaScript File: electronics.js
const searchInput = document.getElementById('searchInput');
const products = document.querySelectorAll('#productContainer .product-card');
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    products.forEach(product => {
        const name = product.dataset.name.toLowerCase();
        product.style.display = name.includes(filter) ? '' : 'none';
    });
});