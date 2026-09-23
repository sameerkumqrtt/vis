// // Toggle Like Button functionality
// const likeBtn = document.querySelector('.like-btn');
// const likesCountSpan = document.querySelector('.likes-count span');

// likeBtn.addEventListener('click', () => {
//     // Check current state based on class names
//     if (likeBtn.classList.contains('fa-regular')) {
//         // Change to solid red heart
//         likeBtn.classList.remove('fa-regular', 'fa-heart');
//         likeBtn.classList.add('fa-solid', 'fa-heart');
//         likeBtn.style.color = '#ed4956';
        
//         // Increase like count simulation
//         let currentLikes = parseInt(likesCountSpan.textContent.replace(',', ''));
//         likesCountSpan.textContent = (currentLikes + 1).toLocaleString();
//     } else {
//         // Change back to regular outline heart
//         likeBtn.classList.remove('fa-solid', 'fa-heart');
//         likeBtn.classList.add('fa-regular', 'fa-heart');
//         likeBtn.style.color = 'inherit';
        
//         // Decrease like count simulation
//         let currentLikes = parseInt(likesCountSpan.textContent.replace(',', ''));
//         likesCountSpan.textContent = (currentLikes - 1).toLocaleString();
//     }
// });

// Dynamic Like Toggle
const likeBtn = document.querySelector('.like-btn i');

if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        if (likeBtn.classList.contains('fa-regular')) {
            likeBtn.classList.remove('fa-regular');
            likeBtn.classList.add('fa-solid');
            likeBtn.style.color = '#ff3040';
        } else {
            likeBtn.classList.remove('fa-solid');
            likeBtn.classList.add('fa-regular');
            likeBtn.style.color = '#262626';
        }
    });
}