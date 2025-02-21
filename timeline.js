// 0 FUNCTION Navbar

document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const isExpanded = thematicalMenu.classList.contains('show');
        thematicalMenu.classList.toggle('show', !isExpanded);
    });

    // Prevent menu from closing when clicking inside
    thematicalMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
            thematicalMenu.classList.remove('show');
        }
    });
});

// Seleziona gli elementi della timeline e le frecce
const timeline = document.querySelector('.timeline');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

// Verifica se gli elementi sono stati trovati
if (timeline && leftArrow && rightArrow) {
    // Scorrimento a sinistra
    leftArrow.addEventListener('click', () => {
        timeline.scrollBy({
            left: -timeline.offsetWidth, // Sposta della larghezza visibile
            behavior: 'smooth' // Scorrimento fluido
        });
    });

    // Scorrimento a destra
    rightArrow.addEventListener('click', () => {
        timeline.scrollBy({
            left: timeline.offsetWidth, // Sposta della larghezza visibile
            behavior: 'smooth' // Scorrimento fluido
        });
    });
}


$(document).ready(function(){
    $('.row').slick({
      setting-name: setting-value
    });
  });

  
$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
      
