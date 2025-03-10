// 0 FUNCTION Navbar
document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarSupportedContent');

    function isMobileView() {
        return window.innerWidth <= 768;
    }

    function moveDropdownItemsToNav() {
        if (isMobileView()) {
            const dropdownMenus = document.querySelectorAll('.dropdown-menu');
            const navbarNav = document.querySelector('.navbar-nav');

            dropdownMenus.forEach(menu => {
                const dropdownItems = menu.querySelectorAll('.dropdown-item');
                dropdownItems.forEach(item => {
                    item.classList.remove('dropdown-item');
                    item.classList.add('nav-link', 'active');

                    const newNavItem = document.createElement('li');
                    newNavItem.classList.add('nav-item');
                    newNavItem.appendChild(item);

                    navbarNav.appendChild(newNavItem);
                });
                menu.remove();
            });
        }
    }

    moveDropdownItemsToNav();
    window.addEventListener('resize', () => {
        moveDropdownItemsToNav();
    });

    // Thematical Path Dropdown Behavior (for larger screens)
    thematicalTrigger.addEventListener('click', (e) => {
        if (!isMobileView()) {
            e.preventDefault();
            e.stopPropagation();
            const isExpanded = thematicalMenu.classList.contains('show');
            thematicalMenu.classList.toggle('show', !isExpanded);
        }
    });

    thematicalMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (isMobileView()) {
            if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        } else {
            if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
                thematicalMenu.classList.remove('show');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById("imageModal").style.display = "none";
});

function openModal(images) {
    const modal = document.getElementById("imageModal");
    const scrollContainer = modal.querySelector(".scroll-container");
    const prev = modal.querySelector(".prev");
    const next = modal.querySelector(".next");
    
    scrollContainer.innerHTML = '';

    images.forEach(src => {
        const imgContainer = document.createElement("div");
        imgContainer.className = "image-container";
        
        const img = document.createElement("img");
        img.src = src;
        img.onclick = function() {
            // Toggle zoom and manage cursor
            this.classList.toggle('zoomed');
            this.style.transform = this.classList.contains('zoomed') ? 'scale(2)' : 'scale(1)';
            this.style.cursor = this.classList.contains('zoomed') ? 'zoom-out' : 'zoom-in';
            
            // Center zoomed image
            if(this.classList.contains('zoomed')) {
                this.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            }
        };
        imgContainer.appendChild(img);
        scrollContainer.appendChild(imgContainer);
    });

    // Handle single image case
    if (images.length <= 1) {
        prev.style.display = 'none';
        next.style.display = 'none';
        scrollContainer.style.justifyContent = 'center'; // Center single image
    } else {
        prev.style.display = 'block';
        next.style.display = 'block';
        scrollContainer.style.justifyContent = 'flex-start';
    }

    scrollContainer.scrollLeft = 0;
    modal.style.display = "block";
}

function scrollGallery(direction) {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollAmount = scrollContainer.clientWidth;
    
    scrollContainer.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Close modal handlers
document.querySelector(".close").onclick = () => {
    const modal = document.getElementById("imageModal");
    const images = modal.querySelectorAll('img');
    
    // Reset zoom on all images when closing
    images.forEach(img => {
        img.classList.remove('zoomed');
    });
    
    modal.style.display = "none";
}

window.onclick = (event) => {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Swipe gestures for better navigation

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;
  const scrollContainer = document.querySelector(".scroll-container");
  const scrollAmount = scrollContainer.clientWidth;

  if (touchEndX < touchStartX - 50) { // Swipe left
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else if (touchEndX > touchStartX + 50) { // Swipe right
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
}

document.querySelector('.scroll-container').addEventListener('touchstart', handleTouchStart);
document.querySelector('.scroll-container').addEventListener('touchend', handleTouchEnd);

  // Paths improvement
function togglePath(pathItem) {
    const description = pathItem.querySelector('.path-description');
    description.classList.toggle('active');
  }
