console.log("Customers page loaded");
let customerForm = document.getElementById("customerForm");
customerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let fullName = document.getElementById("customerName").value.trim();
    let phone = document.getElementById("customerPhone").value.trim();
    let email = document.getElementById("customerEmail").value.trim();
    let cnic = document.getElementById("customerCNIC").value.trim();   
    if(fullName === "" || phone === "" || email === "" || cnic === "") {
        alert("Please fill in all required fields.");
        return;
    }   
    let customers = JSON.parse(localStorage.getItem("customers")) || [];
    let newCustomer = {
        fullName: fullName,
        phone: phone,
        email: email,
        cnic: cnic
    };
    customers.push(newCustomer);
    localStorage.setItem("customers", JSON.stringify(customers));
    alert("Customer added successfully!");
    customerForm.reset();
});
