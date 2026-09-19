console.log("Index page loaded")

let loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = "../login/login.html";
});
let bookBtn = document.querySelector(".book-btn");

bookBtn.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = "../booking/booking.html";
});


let bookRoomBtn = document.querySelector(".primary-btn");

bookRoomBtn.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = "../booking/booking.html";
});


let exploreRoomsBtn = document.querySelector(".secondary-btn");

exploreRoomsBtn.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = "../rooms/rooms.html";
});