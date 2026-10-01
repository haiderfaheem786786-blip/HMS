
console.log("Add Room page loaded");
let roomForm = document.getElementById("roomForm");
roomForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let roomNumber = document.getElementById("roomNumber").value;
    let roomType = document.getElementById("roomType").value;
    let floor = document.getElementById("floor").value;
    let capacity = document.getElementById("capacity").value;
    let price = document.getElementById("price").value;
    let status = document.getElementById("status").value;
    let rooms = JSON.parse(localStorage.getItem("rooms")) || [];
    let roomExists = rooms.some(function(room) {
        return room.roomNumber == roomNumber;
    });
    if (roomExists) {
        alert("Room " + roomNumber + " already exists.");
        return;
    }
    let newRoom = {
        roomNumber: roomNumber,
        roomType: roomType,
        floor: floor,
        capacity: capacity,
        price: price,
        status: status
    };
    rooms.push(newRoom);
    localStorage.setItem("rooms", JSON.stringify(rooms));
    alert("Room added successfully!");
    roomForm.reset();
});

