console.log("Profile page loaded");

let userData = JSON.parse(localStorage.getItem("userData"));

if (userData) {

    document.getElementById("profileName").textContent = userData.name;
    document.getElementById("profileEmail").textContent = userData.email;
    document.getElementById("profileRole").textContent = userData.role;

} else {

    alert("No user data found.");
}