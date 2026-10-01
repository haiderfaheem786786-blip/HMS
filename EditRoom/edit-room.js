        console.log("Edit Room page loaded");
        let backBtn = document.querySelector(".back-btn");
        backBtn.addEventListener("click", function() {
            window.location.href = "../rooms-management/rooms-management.html";
        }); 
        let editRoomForm = document.getElementById("editRoomForm");
        editRoomForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let roomNumber = document.getElementById("roomNumber").value;
            let roomType = document.getElementById("roomType").value;
            let roomPrice = document.getElementById("price").value;
            let guestCount = document.getElementById("guests").value;
            let roomStatus = document.getElementById("status").value;
            let roomDescription = document.getElementById("description").value; 
            if(roomNumber === "" || roomType === "" || roomPrice === "" || guestCount === "" || roomStatus === "" || roomDescription === "") {
                alert("Please fill in all fields.");    

            } else {
                alert("Room details updated successfully!");
                window.location.href = "../rooms-management/rooms-management.html";
            }
        });
