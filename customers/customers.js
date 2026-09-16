console.log("Customers page loaded");
let searchInput = document.getElementById("searchCustomers");
searchInput.addEventListener("input", function() {
    let searchTerm = searchInput.value.toLowerCase(); 
    console.log("Search term:", searchTerm);
let customerRows = document.querySelectorAll("#customersTable tbody tr");
    customerRows.forEach(function(row) {
        let customerName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        let customerPhone = row.querySelector("td:nth-child(3)").textContent.toLowerCase();
        let customerEmail = row.querySelector("td:nth-child(4)").textContent.toLowerCase();
        if (customerName.includes(searchTerm) || customerPhone.includes(searchTerm) || customerEmail.includes(searchTerm)) {
            row.style.display = ""; 
        } else {
            row.style.display = "none"; 
        }
    });
});