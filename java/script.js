document.addEventListener("DOMContentLoaded", function() {
    let cartCount = 0;
    const cartItems = [];

    function addToCart(product) {
        cartCount++;
        updateCartButton();
        cartItems.push(product);
    }

    function updateCartButton() {
        const cartButton = document.getElementById("cart-button");
        cartButton.textContent = `Cart (${cartCount})`;
    }

    document.querySelectorAll(".cart-btn").forEach((button, index) => {
        button.addEventListener("click", () => {
            addToCart({ name: button.getAttribute("data-name"), price: button.getAttribute("data-price") });
        });
    });

    // Open the cart popup
    document.getElementById("cart-button").addEventListener("click", openCart);

    // Close the cart popup
    function closeCart() {
        document.querySelector(".cart-popup").style.display = "none";
    }

    // Open the cart popup
    function openCart() {
        const cartPopup = document.querySelector(".cart-popup");
        const cartItemsContainer = document.querySelector(".cart-items");

        cartItemsContainer.innerHTML = ""; // Clear the previous items

        // Add cart items to the popup
        cartItems.forEach((item, index) => {
            const cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");
            cartItemDiv.innerHTML = `
                <span>${item.name}</span>
                <span>${item.price}</span>
                <button class="remove-item" onclick="removeItem(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
        });

        // Display the cart popup
        cartPopup.style.display = "block";
    }

    // Remove an item from the cart
    function removeItem(index) {
        cartItems.splice(index, 1);
        cartCount = cartItems.length;
        updateCartButton();
        openCart();
    }

    // Close the cart popup
    document.querySelector(".close-cart").addEventListener("click", closeCart);
});

function addToCart(button) {
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");

    cartCount++;
    updateCartButton();
    cartItems.push({ name, price });
}
