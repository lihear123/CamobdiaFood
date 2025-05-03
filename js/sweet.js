// Object to store the currently selected product details
let currentProduct = {};

// Function to show product details in the modal
function showProductDetails(name, price, image) {
    currentProduct = { name, price }; // Store product details
    document.getElementById("modalTitle").textContent = name; // Set modal title
    document.getElementById("modalPrice").textContent = price; // Set modal price.toFixed(2)
    document.getElementById("modalImage").src = image; // Set modal image
    document.getElementById("quantity").value = 1; // Reset quantity to 1
    document.getElementById("totalPrice").textContent = price.toFixed(0); // Set initial total price
    document.getElementById("productModal").style.display = "flex"; // Show modal
}

// Function to close the modal
function closeModal() {
    document.getElementById("productModal").style.display = "none"; // Hide modal
}

// Function to update the total price based on quantity
function updateTotalPrice() {
    const quantity = parseInt(
        document.getElementById("quantity").value,
        10
    ); // Get quantity
    const totalPrice = (currentProduct.price * quantity).toFixed(0); // Calculate total price
    document.getElementById("totalPrice").textContent = totalPrice; // Update total price in modal
}

// Function to handle the "Buy" button click
function buyProduct() {
    const quantity = document.getElementById("quantity").value; // Get quantity
    alert(`You bought ${quantity} of ${currentProduct.name}`); // Show confirmation alert
    closeModal(); // Close the modal
}

// Function to change the quantity value
function changeQuantity(amount) {
    const quantityInput = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityInput.value, 10);
    currentQuantity = isNaN(currentQuantity) ? 1 : currentQuantity + amount;
    if (currentQuantity < 1) currentQuantity = 1; // Ensure quantity doesn't go below 1
    quantityInput.value = currentQuantity;
    updateTotalPrice(); // Update the total price after changing quantity
}
