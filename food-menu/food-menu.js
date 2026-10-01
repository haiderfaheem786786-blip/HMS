console.log("Food menu page loaded");
let orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach(function(button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let foodName = button.getAttribute("data-name");
    let foodPrice = button.getAttribute("data-price");
let foodCard = button.closest(".food-card");
let quantityInput = foodCard.querySelector(".quantity");
let quantity = parseInt(quantityInput.textContent);
foodPrice = foodPrice * quantity;
    let orderDetails = {
      name: foodName,
      price: foodPrice, 
      quantity: quantity,
      pricePerItem: parseFloat(button.getAttribute("data-price"))
       
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    window.location.href = "../order-details/order-details.html";
  });
});
let plusButtons = document.querySelectorAll(".plus-btn");
plusButtons.forEach(function(button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let foodCard = button.closest(".food-card");
    let quantityInput = foodCard.querySelector(".quantity");
    let currentQuantity = parseInt(quantityInput.textContent);
    quantityInput.textContent = currentQuantity + 1;
  });
});
let minusButtons = document.querySelectorAll(".minus-btn");
minusButtons.forEach(function(button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let foodCard = button.closest(".food-card");
    let quantityInput = foodCard.querySelector(".quantity");
    let currentQuantity = parseInt(quantityInput.textContent);
    if (currentQuantity > 1) {
      quantityInput.textContent = currentQuantity - 1;
    }
  });
});