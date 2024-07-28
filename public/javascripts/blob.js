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
    const likeButtons = document.querySelectorAll('.comment-buttons button:first-of-type');
    const dislikeButtons = document.querySelectorAll('.comment-buttons button:last-of-type');
    const loadMoreButton = document.getElementById('loadMoreBtn');
    const loadLessButton = document.getElementById('loadLessBtn');
    const commentsContainer = document.querySelector('.comment-section');

    let additionalComments = [];
    let commentsDisplayed = 2; 

    // Like button functionality
    likeButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('You liked this comment!');
      })
    });

    // Dislike button functionality
    dislikeButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('You disliked this comment!');
      });
    });

    // Load More button functionality
    if (loadMoreButton) {
      loadMoreButton.addEventListener('click', () => {
        alert('Loading more comments...');
        if (additionalComments.length === 0) {
          additionalComments = [
            { img: './public/images/p1.jpg', author: 'Krishna Upadhyay', text: 'This is a great addition to the discussion!' },
            { img: './public/images/p2.png', author: 'Yash Chopra', text: 'This is a fantastic addition!' }
          ];          
        }

        additionalComments.forEach(comment => {
          const commentElement = document.createElement('div');
          commentElement.className = 'comment';
          commentElement.innerHTML = `
            <img src="${comment.img}" alt="User Avatar" />
            <p><span class="author">${comment.author}:</span> ${comment.text}</p>
            <div class="comment-buttons">
              <button>Like</button>
              <button>Dislike</button>
            </div>
          `;
          commentsContainer.appendChild(commentElement);
        });
        loadMoreButton.style.display = 'none';
        loadLessButton.style.display = 'inline-block';
      });
    }

    // Load Less button functionality
    if (loadLessButton) {
      loadLessButton.addEventListener('click', () => {
        const allComments = Array.from(commentsContainer.getElementsByClassName('comment'));
        allComments.slice(commentsDisplayed).forEach(comment => comment.remove());
        loadMoreButton.style.display = 'inline-block';
        loadLessButton.style.display = 'none';
      });
    }
});
