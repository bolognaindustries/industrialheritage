// Seleziona gli elementi della timeline e le frecce
const timeline = document.querySelector('.timeline');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Verifica se gli elementi sono stati trovati
if (timeline && leftArrow && rightArrow) {
    // Scorrimento a sinistra
    leftArrow.addEventListener('click', scrollLeft);
    function scrollLeft() {
        timeline.scrollBy(-385, 0);
    }
}
// Scorrimento a sinistra
leftArrow.addEventListener('click', scrollLeft);
function scrollLeft() {
    timeline.scrollBy(-385,0);
}

// Scorrimento a destra
rightArrow.addEventListener('click', scrollRight);
function scrollRight() {
    timeline.scrollBy(385,0);
}
