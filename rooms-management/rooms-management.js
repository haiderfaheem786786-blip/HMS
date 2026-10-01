
console.log("Room Management page loaded");
let addRoomBtn = document.querySelector(".add-room-btn");
addRoomBtn.addEventListener("click", function() {
    window.location.href = "../add-room/add-room.html";
});
let rooms = JSON.parse(localStorage.getItem("rooms")) || [];
let tableBody = document.querySelector("table tbody");
rooms.forEach(function(room) {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${room.roomNumber}</td>
        <td>${room.roomType}</td>
        <td>${room.floor}</td>
        <td>${room.capacity} Guests</td>
        <td>Rs. ${room.price}</td>
        <td>
            <span class="status ${room.status}">
                ${room.status}
            </span>
        </td>
        <td>
            <button class="view-btn">View</button>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        </td>
    `;
    tableBody.appendChild(row);
});
let viewButtons = document.querySelectorAll(".view-btn");
viewButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let row = button.closest("tr");
        let roomNumber = row.cells[0].textContent;
        let roomType = row.cells[1].textContent;
        let floor = row.cells[2].textContent;
        let capacity = row.cells[3].textContent;
        let price = row.cells[4].textContent;
        let status = row.cells[5].textContent;
        alert(
            "Room Number: " + roomNumber +
            "\nRoom Type: " + roomType +
            "\nFloor: " + floor +
            "\nCapacity: " + capacity +
            "\nPrice: " + price +
            "\nStatus: " + status
        );
    });
});
let deleteButtons = document.querySelectorAll(".delete-btn");
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let row = button.closest("tr");
        let roomNumber = row.cells[0].textContent;
        let confirmDelete = confirm(
            "Are you sure you want to delete Room " + roomNumber + "?"
        );
        if (confirmDelete) {
            rooms = rooms.filter(function(room) {
                return room.roomNumber != roomNumber;
            });
            localStorage.setItem(
                "rooms",
                JSON.stringify(rooms)
            );
            row.remove();
            alert("Room deleted successfully!");
        }
    });
});
let editButtons = document.querySelectorAll(".edit-btn");
editButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let row = button.closest("tr");
        let roomNumber = row.cells[0].textContent;
        let room = rooms.find(function(room) {
         return room.roomNumber == roomNumber;
        });
        if (room) {
            localStorage.setItem(
                "editRoom",
                JSON.stringify(room)
            );
            window.location.href = "../add-room/add-room.html";
        }
    });
});
