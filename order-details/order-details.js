console.log("Order Details loaded page");
let orderdetails = JSON.parse(localStorage.getItem("orderDetails"));
console.log("Saved Order:", orderdetails);
if (orderdetails) {
  document.getElementById("items").value = orderdetails.name;
  document.getElementById("amount").value =  orderdetails.price;
  document.getElementById("quantity").textContent = orderdetails.quantity || 1;
document.getElementById("customerName").textContent = orderdetails.customerName || "N/A";
document.getElementById("room").textContent = orderdetails.room || "N/A";
document.getElementById("orderId").textContent = orderdetails.orderId || "N/A";
document.getElementById("orderDate").textContent = orderdetails.date || "N/A";
document.getElementById("orderStatus").textContent = orderdetails.status || "N/A";
let plusButton = document.getElementById("plusBtn");
let minusButton = document.getElementById("minusBtn");
let quantityElement = document.getElementById("quantity");
plusButton.addEventListener("click", function() {
  let currentQuantity = parseInt(quantityElement.textContent);
  quantityElement.textContent = currentQuantity + 1;
  orderdetails.quantity = currentQuantity + 1;
  localStorage.setItem("orderDetails", JSON.stringify(orderdetails));
  updateamount();
});
minusButton.addEventListener("click", function() {
  let currentQuantity = parseInt(quantityElement.textContent);
  if (currentQuantity > 1) {
    quantityElement.textContent = currentQuantity - 1;
    orderdetails.quantity = currentQuantity - 1;
    localStorage.setItem("orderDetails", JSON.stringify(orderdetails));
    updateamount();
  }
});
  function updateamount() {
    let amountElement = document.getElementById("amount");
    let currentQuantity = parseInt(quantityElement.textContent);
    let price = orderdetails.priceperItem || 0; 
    let totalAmount = currentQuantity * price;
    amountElement.value = totalAmount.toFixed(2);
  }

let updateButton = document.getElementById("updateBtn");
updateButton.addEventListener("click", function() {
  let updatedQuantity = parseInt(quantityElement.textContent);
  orderdetails.quantity = updatedQuantity;
  orderdetails.name = document.getElementById("items").value; 
  orderdetails.price = parseFloat(document.getElementById("amount").value);
  localStorage.setItem("orderDetails", JSON.stringify(orderdetails));
  alert("Order updated successfully!");
});
}