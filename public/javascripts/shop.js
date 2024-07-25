document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll('.crd').forEach(item => {
      item.addEventListener('click', () => {
        const title = item.querySelector('h3').innerText;
        const price = item.querySelector('h3').nextElementSibling.innerText;
  
        // Display alert message with item details
        alert(`✨ You're looking at a fabulous item! ✨\n\nItem: ${title}\n\nWould you like to know more about this amazing piece?`);
  
        const goToReview = confirm("Would you like to go to the review page to see what others think?");
  
        if (goToReview) {

          window.location.href = 'reviews.html';
        } else {
          window.location.href = 'shops.html';
        }
      });
    }); 
  });
  