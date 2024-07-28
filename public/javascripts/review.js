let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

    if (ul.className == "showData") {
        document.getElementById("bar").className = "fa-solid fa-xmark";
    } else {
        document.getElementById("bar").className = "fa-solid fa-bars";
    }
})

document.addEventListener('DOMContentLoaded', () => {
    const reviews = document.querySelectorAll('.rCard');
    const filterInput = document.getElementById('filter-input');
  
    filterInput.addEventListener('input', function() {
      const filterValue = this.value.toLowerCase();
  
      reviews.forEach(review => {
        const reviewText = review.querySelector('p').textContent.toLowerCase();
        if (reviewText.includes(filterValue)) {
          review.style.display = '';
        } else {
          review.style.display = 'none';
        }
      });
    });
  });
  