console.log("Review Details loaded page");
let reviewId = new URLSearchParams(window.location.search).get("reviewId");
let reviewIdElement = document.getElementById("reviewId");
reviewIdElement.textContent = reviewId;
let deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", function (event) {
  event.preventDefault();
    if (confirm("Are you sure you want to delete review " + reviewId + "?")) {
        window.location.href = "../reviews.html";
    }
});