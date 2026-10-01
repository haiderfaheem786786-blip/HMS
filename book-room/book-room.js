console.log("Book Room page loaded");
let roomsContainer = document.getElementById("roomsContainer");
let bookedRooms = JSON.parse(localStorage.getItem("bookedRooms")) || [];
for (let roomNumber = 101; roomNumber <= 250; roomNumber++) {   
    let room = document.createElement("div");
    room.innerHTML = `
        <h2>Room ${roomNumber}</h2>
        <p><strong>Type:</strong> Deluxe</p>
        <p><strong>Guests:</strong> 2</p>
        <p><strong>Price:</strong> Rs. 5,000 / Night</p>
        <button class="bookNowBtn" data-room="${roomNumber}">
            Book Now
        </button>
        <hr>
    `;
    roomsContainer.appendChild(room);
}
let bookButtons = document.querySelectorAll(".bookNowBtn");
bookButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let roomNumber = button.getAttribute("data-room");
        let userData = JSON.parse(localStorage.getItem("userData"));
        if (!userData) {
            alert("Please log in first.");
            window.location.href = "../login/login.html";
           return;
        }
        if (bookedRooms.includes(roomNumber)) {
            alert("Room " + roomNumber + " is already booked.");
           return;
        }
        let bookingData = {
            customerName: userData.name,
            roomNumber: roomNumber,
            roomType: "Deluxe",
            guests: 2,
            price: 5000
        };
        bookedRooms.push(roomNumber);
        localStorage.setItem(
            "bookedRooms",
            JSON.stringify(bookedRooms)
        );
        localStorage.setItem(
            "roomDetails",
            JSON.stringify(bookingData)
        );
        alert("Room " + roomNumber + " booked successfully!");
        button.textContent = "Already Booked";
        button.disabled = true;
    });
});