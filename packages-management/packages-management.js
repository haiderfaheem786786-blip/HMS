console.log("Packages Management page loaded");
let addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Add Package button clicked");
});
let searchInput = document.querySelector(".search-box input");
searchInput.addEventListener("input", function() {
    let searchTerm = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll("tbody tr");
    rows.forEach(function(row) {
        let packageName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        if(packageName.includes(searchTerm)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});

let deletedPackages = JSON.parse(localStorage.getItem("deletedPackages")) || [];
let rows = document.querySelectorAll("tbody tr");
rows.forEach(function(row) {
    let packageId = row.querySelector("td:nth-child(1)").textContent;
    if(deletedPackages.includes(packageId)) {
        row.remove();
    }
});
let deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let row = button.closest("tr");
        let packageId = row.querySelector("td:nth-child(1)").textContent;
        let packageName = row.querySelector("td:nth-child(2)").textContent;
        let confirmDelete = confirm(
            `Are you sure you want to delete "${packageName}"?`
        );
        if(confirmDelete) {
            if(!deletedPackages.includes(packageId)) {
                deletedPackages.push(packageId);
            }
            localStorage.setItem(
                "deletedPackages",
                JSON.stringify(deletedPackages)
            );
            row.remove();
            alert("Package deleted successfully!");
        }
    });
});
let editButtons = document.querySelectorAll(".edit-btn");
editButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let row = button.closest("tr");
        let packageName = row.querySelector("td:nth-child(2)").textContent;
        alert("You clicked Edit for " + packageName);
    });
});