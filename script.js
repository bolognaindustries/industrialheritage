// navbar

document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {

        
        e.preventDefault(); 
        const isExpanded = thematicalMenu.classList.contains('show');
        thematicalMenu.classList.toggle('show', !isExpanded);
    });

    document.addEventListener('click', (e) => {
        if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
            thematicalMenu.classList.remove('show');
        }
    });
});

// user selection

document.addEventListener("DOMContentLoaded", function () {
    const users = document.querySelectorAll(".user-img");
    let activeUser = null;

    users.forEach(user => {
        user.addEventListener("click", function () {
            if (activeUser && activeUser !== user) {
                activeUser.src = activeUser.src.replace("Inverted.png", ".png");
            }

            if (user === activeUser) {
                user.src = user.src.replace("Inverted.png", ".png");
                activeUser = null;
            } else {
                user.src = user.src.replace(".png", "Inverted.png");
                activeUser = user;
            }
        });
    });
});


//hidden images and dynamic height

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-button');
    const hiddenImages = document.querySelector('.hidden-images');
    const section4 = document.querySelector('.section4');

    toggleButton.addEventListener('click', function (event) {
        event.preventDefault();

        if (hiddenImages.style.display === 'none' || hiddenImages.style.display === '') {
            hiddenImages.style.display = 'flex';

            setTimeout(() => {
                window.scrollBy({
                    top: 100,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            hiddenImages.style.display = 'none';
        }
    });
});


// museum carousel

var title1 = document.getElementById("floor-title1");
var title2 = document.getElementById("floor-title2");

function updateTitle() {
    var activeItem = document.querySelector(".carousel-item.active img")

    if(activeItem) {
        title1.style.display = "none";
        title2.style.display = "none";

        if(activeItem.id === "img1") {
            title1.style.display = "block";
        } else if(activeItem.id === "img2") {
            title2.style.display = "block";
        }
    }
}

updateTitle();

document.querySelector("#myCarousel").addEventListener("slid.bs.carousel", updateTitle);

document.getElementById('toggle-image').addEventListener('click', function (e) {
    e.preventDefault();
    const hiddenImages = document.getElementById('hidden-images');
    hiddenImages.style.display = hiddenImages.style.display === 'flex' ? 'none' : 'flex';
});


// mobile dropdowns
document.addEventListener('DOMContentLoaded', () => {
    // Mobile-only dropdown handling
    if (window.innerWidth <= 768) {
      document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
          e.preventDefault();
          const menu = this.nextElementSibling;
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        });
      });
  
      // Close menus when clicking outside (mobile only)
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
          document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.style.display = 'none';
          });
        }
      });
    }
  });