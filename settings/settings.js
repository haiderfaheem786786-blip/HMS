console.log("Settings page loaded");
let settingsForm = document.getElementById("settingsForm");
settingsForm.addEventListener("submit", function(event) {
    event.preventDefault();
    let hotelName = document.getElementById("hotelName").value;
    let roomRate = document.getElementById("roomRate").value;
    let currency = document.getElementById("currency").value;
    let hotelSettings = {
        hotelName: hotelName,
        roomRate: roomRate,
        currency: currency
    };
    localStorage.setItem("hotelSettings", JSON.stringify(hotelSettings));
    document.getElementById("message").textContent =
        "Settings saved successfully!";
});