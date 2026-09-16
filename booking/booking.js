let bookBtn = document.getElementById('bookBtn');
bookBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let cnic = document.getElementById('cnic').value;
    let roomNumber = document.getElementById('roomNumber').value;
    let roomType = document.getElementById('roomType').value;
    let guests = document.getElementById('guests').value;
    let numberOfRooms = document.getElementById('numberOfRooms').value;
    let checkInDate = document.getElementById('checkInDate').value;
    let checkOutDate = document.getElementById('checkOutDate').value;
    if(fullName.trim() === '' || email.trim() === '' || phone.trim() === '' || cnic.trim() === '' || roomNumber.trim() === '' || roomType.trim() === '' || guests.trim() === '' || numberOfRooms.trim() === '' || checkInDate.trim() === '' || checkOutDate.trim() === '')  {
        alert('Please fill in all the required fields.');
        return;
    }
    let checkIn = new Date(checkInDate);
    let checkOut = new Date(checkOutDate);
    if(checkOut <= checkIn) {
        alert('Check-out date must be after check-in date.');
        return;
    }
    if(Number(guests) <= 0 || Number(numberOfRooms) <= 0) {
        alert('Number of guests and number of rooms must be greater than zero.');
        return;
    }
    let paymentMethod = document.getElementById('paymentMethod').value;
    let advancePayment = document.getElementById('advancePayment').value;
    let specialRequest = document.getElementById('specialRequest').value;
  
    if(!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address.');
        return;
    }
      if(phone.length !== 11 || !/^\d+$/.test(phone)) {
        alert('Please enter a valid 11-digit phone number.');
        return;
    }
    if(cnic.length !== 13 || !/^\d+$/.test(cnic)) {
        alert('Please enter a valid 13-digit CNIC number.');
        return;
    }
    if(paymentMethod.trim() === '' || advancePayment.trim() === '') {
        alert('Please select a payment method and enter the advance payment amount.');
        return;
    }
    if(Number(advancePayment) < 0) {
        alert('Advance payment cannot be negative.');
        return;
    }
    if(isNaN(Number(advancePayment))) {
        alert('Advance payment must be a valid number.');
        return;
    }
    
    alert("Booking data received:\n" +
        "Full Name: " + fullName + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "CNIC: " + cnic + "\n" +
        "Room Number: " + roomNumber + "\n" +
        "Room Type: " + roomType + "\n" +
        "Number of Guests: " + guests + "\n" +
        "Number of Rooms: " + numberOfRooms + "\n" +
        "Check In Date: " + checkInDate + "\n" +
        "Check Out Date: " + checkOutDate + "\n" +
        "Payment Method: " + paymentMethod + "\n" +
        "Advance Payment: Rs. " + advancePayment + "\n" +
        "Special Request: " + specialRequest);
        let bookingData = {
            fullName: fullName,
            email: email,
            phone: phone,
            cnic: cnic,
            roomNumber: roomNumber,
            roomType: roomType,
            guests: guests,
            numberOfRooms: numberOfRooms,
            checkInDate: checkInDate,
            checkOutDate: checkOutDate,
            paymentMethod: paymentMethod,
            advancePayment: advancePayment,
            specialRequest: specialRequest
};
localStorage.setItem('bookingData', JSON.stringify(bookingData));
});
let cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    if(confirm('Are you sure you want to cancel the booking?')) {
location.reload();
    }
});