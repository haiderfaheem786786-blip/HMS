console.log("Room Details page loaded");
let backBtn = document.querySelector(".back-btn");
backBtn.addEventListener("click", function() {
    window.location.href = "../rooms/rooms.html";
});
let editBtn = document.querySelector(".edit-btn");
editBtn.addEventListener("click", function() {
    window.location.href = "../rooms-management/edit-room.html";
});
let bookBtn = document.querySelector(".book-btn");
bookBtn.addEventListener("click", function() {
    window.location.href = "../booking/booking.html";
});