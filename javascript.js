window.addEventListener('scroll', function () {
    // Riferimento all'elemento #rest-of-the-page
    var triggerElement = document.getElementById('rest-of-the-page');
    var triggerPosition = triggerElement.getBoundingClientRect().top;

    // Riferimento alla navbar e all'hamburger button
    var navbar = document.getElementById('navbar');
    var hamburgerButton = document.querySelector('.navbar-toggler');

    // Se l'utente ha scrollato fino a #rest-of-the-page
    if (triggerPosition <= 0) {
      navbar.classList.add('hidden-navbar');
      hamburgerButton.classList.add('navbar-toggler');
    } else {
      navbar.classList.remove('hidden-navbar');
      hamburgerButton.classList.remove('show-hamburger');
    }
  });