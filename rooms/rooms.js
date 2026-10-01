    console.log("Rooms page loaded");
    let addBtn = document.querySelector(".add-btn");
    addBtn.addEventListener("click", function() {
    alert("Add Room button clicked!");
    });
    let searchInput = document.getElementById("searchRoom");
    searchInput.addEventListener("input", function() {
    let filter = searchInput.value.toLowerCase();
      

let roomaCards = document.querySelectorAll(".room-card");
    for (let i = 0; i < roomaCards.length; i++) {
        let roomName = roomaCards[i].querySelector("h2").textContent.toLowerCase();
        if (roomName.includes(filter)) {
            roomaCards[i].style.display = "block";
        } else {
            roomaCards[i].style.display = "none";
        }
    }
    });
    let roomFilter = document.getElementById("roomFilter");
    roomFilter.addEventListener("change", function() {
    let filterValue = roomFilter.value; 
let roomCards = document.querySelectorAll(".room-card");
    for (let i = 0; i < roomCards.length; i++) {
        let roomStatus = roomCards[i].querySelector(".status").textContent.toLowerCase();
        if (filterValue === "all" || roomStatus === filterValue) {
            roomCards[i].style.display = "block";
        } else {
            roomCards[i].style.display = "none";
        }
    }
    });
    let viewBtn = document.querySelectorAll(".view-btn");
    viewBtn.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let roomCard = btn.closest(".room-card");
            let roomName = roomCard.querySelector("h2").textContent;
            window.location.href = "../room-details/room-details.html?room=" + encodeURIComponent(roomName);
        });
    });
    let editBtn = document.querySelectorAll(".edit-btn");
    editBtn.forEach(function(btn) {
        btn.addEventListener("click", function() {
            let roomCard = btn.closest(".room-card");   
            let roomName = roomCard.querySelector("h2").textContent;    
            window.location.href = "../rooms-management/edit-room.html?room=" + encodeURIComponent(roomName);
        });
    });