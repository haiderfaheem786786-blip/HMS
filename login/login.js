
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let emailValue = email.value;
    let passwordValue = password.value;
    let role = document.getElementById("role").value;
    if (
        role === "admin" &&
        emailValue === "admin@gmail.com" &&
        passwordValue === "12345"
    ) {
        window.location.href = "../admin-dashboard/admin-dashboard.html";
    } else {
        let userData = JSON.parse(localStorage.getItem("userData"));
        if (
            userData &&
            emailValue === userData.email &&
            passwordValue === userData.password &&
            role === userData.role
        ) {
            if (role === "customer") {
                window.location.href = "../customer-dashboard/customer-dashboard.html";
            } else if (role === "admin") {
                window.location.href = "../admin-dashboard/admin-dashboard.html";
            }
        } else {
            alert("Invalid user credentials");
        }
    }
});

