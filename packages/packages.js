console.log("Packages loaded page")
let addbtn = document.querySelector('.add-btn')
addbtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "../packages-management/packages-management.html";
});
let bookPackagesBtn = document.querySelector(".book-package-btn");

bookPackagesBtn.addEventListener("click", function(event){

    event.preventDefault();

    window.location.href = "../booking/booking.html";

});