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
  