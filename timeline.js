// Seleziona gli elementi della timeline e le frecce
const timeline = document.querySelector('.timeline');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Scorrimento a sinistra
leftArrow.addEventListener('click', () => {
    timeline.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});

// Scorrimento a destra
rightArrow.addEventListener('click', () => {
    timeline.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
