let cart = [];
let total = 0;

// SEARCH
function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(p => {
        let name = p.getAttribute("data-name");
        p.style.display = name.includes(input) ? "block" : "none";
    });
}

// ADD TO CART
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    displayCart();
}

// SHOW CART
function displayCart() {
    let cartDiv = document.getElementById("cartItems");
    cartDiv.innerHTML = "";

    cart.forEach(item => {
        cartDiv.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}
