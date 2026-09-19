console.log("Customers page loaded");
let searchInput = document.getElementById("searchCustomer");
searchInput.addEventListener("input", function() {
    let searchTerm = searchInput.value.toLowerCase(); 
    console.log("Search term:", searchTerm);
let customerRows = document.querySelectorAll("tbody tr");
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
let customersTableBody = document.querySelector("tbody");
customersTableBody.addEventListener("click", function(event) {

    if (event.target.classList.contains("view-btn")) {

        let row = event.target.closest("tr");

        let customerName = row.querySelector("td:nth-child(2)").textContent;
        let customerPhone = row.querySelector("td:nth-child(3)").textContent;
        let customerEmail = row.querySelector("td:nth-child(4)").textContent;
        let customerCNIC = row.querySelector("td:nth-child(5)").textContent;

        alert(`Customer Details:\n\nName: ${customerName}\nPhone: ${customerPhone}\nEmail: ${customerEmail}\nCNIC: ${customerCNIC}`);
    }

    if (event.target.classList.contains("delete-btn")) {

        let row = event.target.closest("tr");
        let customerName = row.querySelector("td:nth-child(2)").textContent;

        if (confirm(`Are you sure you want to delete customer "${customerName}"?`)) {

            
            let customers = JSON.parse(localStorage.getItem("customers")) || [];

            customers = customers.filter(function(customer) {
            return customer.fullName !== customerName;
            });

            localStorage.setItem("customers", JSON.stringify(customers));
            row.remove();
        }
    }
});

let savedCustomers = JSON.parse(localStorage.getItem("customers")) || [];

savedCustomers.forEach(function(customer, index){
let newRow = document.createElement ("tr");
    newRow.innerHTML = `
     <td>C00${index + 5}</td>
        <td>${customer.fullName}</td>
        <td>${customer.phone}</td>
        <td>${customer.email}</td>
        <td>${customer.cnic}</td>
        <td>0</td>
        <td>
            <span class="active">Active</span>
        </td>
        <td>
            <button class="view-btn">View</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;

    customersTableBody.appendChild(newRow);
});
let addCustomerBtn = document.querySelector(".add-btn");

addCustomerBtn.addEventListener("click", function() {
    window.location.href = "../AddCustomer/add-customer.html";
});