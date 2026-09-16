console.log('Bookings page loaded');
let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', function() {
    window.location.href = '../booking/booking.html';
});
let viewBtns = document.querySelectorAll('.view-btn');
viewBtns.forEach(function(viewBtn) {
    viewBtn.addEventListener('click', function() {
        alert("View button clicked");
        // Handle view button click
        let row = this.closest('tr');
        let bookingId = row.cells[0].textContent;
    alert("Booking ID: " + bookingId);
    let customerName = row.cells[1].textContent;
    let roomNumber = row.cells[2].textContent;
    let checkInDate = row.cells[3].textContent;
    let checkOutDate = row.cells[4].textContent;
   let guest = row.cells[5].textContent;
    let totalAmount = row.cells[6].textContent;
    let status = row.cells[7].textContent;
    alert("Booking Details:\n\nBooking ID: " + bookingId + "\nCustomer Name: " + customerName + "\nRoom Number: " + roomNumber + "\nCheck-in Date: " + checkInDate + "\nCheck-out Date: " + checkOutDate + "\nGuest: " + guest + "\nTotal Amount: " + totalAmount + "\nStatus: " + status);

    });
}); 
let deleteBtns = document.querySelectorAll('.delete-btn');
deleteBtns.forEach(function(deleteBtn) {
    deleteBtn.addEventListener('click', function() { 
     let row = this.closest('tr');
     let bookingId = row.cells[0].textContent;
     alert("Delete button clicked for Booking ID: " + bookingId);
     row.remove();
     // Handle delete button click
    });
});
let searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let rows = document.querySelectorAll('table tbody tr');
    rows.forEach(function(row) {
        let customerName = row.cells[1].textContent.toLowerCase();
        let roomNumber = row.cells[2].textContent.toLowerCase();
        if (customerName.includes(searchTerm) || roomNumber.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});
let backBtn = document.getElementById('backBtn');
backBtn.addEventListener('click', function() {
    window.location.href = '../index/index.html';
});