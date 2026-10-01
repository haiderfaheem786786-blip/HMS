console.log("Customer Dashboard Loaded");
let dashboardLink = document.getElementById("dashboard-link");
dashboardLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redirect to the customer dashboard page
    window.location.href = "../customer-dashboard/customer-dashboard.html";
});
let myBookingsLink = document.getElementById("my-bookings-link");
myBookingsLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redirect to the my bookings page
    window.location.href = "../my-bookings/my-bookings.html";
});
let bookRoomLink = document.getElementById("book-room-link");
bookRoomLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redirect to the book room page
    window.location.href = "../book-room/book-room.html";
});
let paymentsLink = document.getElementById("payments-link");
paymentsLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redirect to the payments page
    window.location.href = "../payments/payments.html";
});
let profileLink = document.getElementById("profile-link");
profileLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redirect to the profile page
    window.location.href = "../profile/profile.html";
});
let logoutLink = document.getElementById("logout-link");
logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../login/login.html";
});        
let viewDetailsBtn = document.getElementById("view-details-btn"); 
viewDetailsBtn.addEventListener("click", function(event) {
    event.preventDefault();                 
    // Redirect to the view details page
   window.location.href = "../customer-dashboard/view-details.html";
});
let userData = JSON.parse(localStorage.getItem("userData"));
if (userData) {
    document.getElementById("welcomeMessage").textContent =
        "Welcome back, " + userData.name + "!";
}