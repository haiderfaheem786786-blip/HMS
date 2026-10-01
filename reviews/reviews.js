console.log("Reviews loaded page");
let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  let filter = searchInput.value.toLowerCase();
    let rows = document.querySelectorAll(".table-container table tbody tr");
    rows.forEach(function (row) {
        let reviewName = row.querySelector("td:nth-child(2)").textContent.toLowerCase();    
        if (reviewName.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});
let viewButtons = document.querySelectorAll(".view-btn");
viewButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {  
    event.preventDefault();
    let row = button.closest("tr");
    let reviewId = row.querySelector("td:first-child").textContent;
    let customerName  = row.querySelector("td:nth-child(2)").textContent;
    let room = row.querySelector("td:nth-child(3)").textContent;
    let reviewRating= row.querySelector("td:nth-child(4)").textContent;
    let reviewComment = row.querySelector("td:nth-child(5)").textContent;
    let reviewDate = row.querySelector("td:nth-child(6)").textContent;
    let reviewstatus = row.querySelector("td:nth-child(7)").textContent;
window.location.href = "review-details/review-details.html?reviewId=" + reviewId + "&customerName=" + customerName + "&room=" + room + "&reviewRating=" + reviewRating + "&reviewComment=" + reviewComment + "&reviewDate=" + reviewDate + "&reviewstatus=" + reviewstatus;
  });
});
    
