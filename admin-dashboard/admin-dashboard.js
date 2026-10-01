console.log("Admin Dashboard initialized");
let totalRoomsElement = document.getElementById('totalRooms');
totalRoomsElement. innerText = "60"; 
let occupiedRoomsElement = document.getElementById('occupiedRooms');
occupiedRoomsElement. innerText = "25";
let availableRoomsElement = document.getElementById('availableRooms');
availableRoomsElement. innerText = "35";
let totalCustomersElement = document.getElementById('totalCustomers');
totalCustomersElement. innerText = "120";
 let bookingTable = document.querySelector('table');
 console.log("Booking Table:", bookingTable);

 let bookingRows = bookingTable.querySelectorAll('tbody tr');
 bookingRows.forEach(row => {
     row.addEventListener('click', function() {
         let customerName = this.querySelector('td').innerText;
 console.log("Customer Name:", customerName);
         console.log("Clicked booking row:", this.innerText);
         let status = this.querySelectorAll('td')[4].innerText;
         console.log("Booking Status:", status);
         if (status === "Booked") {
             this.style.backgroundColor = "#fff3cd";
         }else if (status === "Checked In") {
             this.style.backgroundColor = "#d4edda";
         }
     });
    });

let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', function() {
        console.log("Card title:", this.querySelector('h3').innerText);
        console.log("Card description:", this.querySelector('p').innerText);
        console.log("Card clicked:", this.querySelector('p').innerText);
        this.querySelector('h3').classList.toggle('highlight');
        console.log("Clicked:", this.innerText)
      
});
});

  let sidebar = document.querySelector('.sidebar');
        let sidebarlinks = sidebar.querySelectorAll('a');
        sidebarlinks.forEach(link => {
            link.addEventListener('click', function() {
            
                sidebarlinks.forEach(link => {
            link.classList.remove('active');
              });
        this.classList.add('active');
         console.log("Clicked link:", this.innerText);
    });
});
let reportsLink = document.getElementById("reports-link");
reportsLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../reports/reports.html";
});
let settingsLink = document.getElementById("settings-link");
settingsLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../settings/settings.html";
});
let logoutLink = document.getElementById("logout-link");
logoutLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "../login/login.html";
});
