console.log("Restaurant loded page");
let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", function (event) {
 event.preventDefault();
    window.location.href = "../order-details/order-details.html";     
});
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  let filter = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll(".table-container table tbody tr");
    rows.forEach(function (row) {
        let orderName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        if (orderName.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
let viewButtons = document.querySelectorAll(".view-btn");
viewButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        let row = button.closest("tr");
        let orderData = {
            orderId: row.cells[0].textContent.trim(),
            customerName: row.cells[1].textContent.trim(),
            room: row.cells[2].textContent.trim(),
            name: row.cells[3].textContent.trim(),
            price: parseFloat(
                row.cells[4].textContent
                .replace("Rs.", "")
                .replace(",", "")
                .trim()
            ),
            quantity: 1,
            priceperItem: parseFloat(
                row.cells[4].textContent
                .replace("Rs.", "")
                .replace(",", "")
                .trim()
            ),
            date: row.cells[5].textContent.trim(),
            status: row.cells[6].textContent.trim()
        };
        localStorage.setItem("orderDetails", JSON.stringify(orderData));
        window.location.href = "../order-details/order-details.html";
    });
});
let deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let row = button.closest("tr");
    let orderId = row.querySelector("td:first-child").textContent;
    if (confirm("Are you sure you want to delete order " + orderId + "?")) {
      row.remove();
    }
  });
    });
let backBtn = document.querySelector(".back-btn");
backBtn.addEventListener("click", function (event) {
  event.preventDefault(); 
  history.back();
});



