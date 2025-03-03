// Navbar
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

// VIEWPORT
// detecting the viewport and showing the right piece of HTML code
    function loadCss(filename) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = filename;
        document.head.appendChild(link);
    }

    function loadJs(filename) {
        var script = document.createElement("script");
        script.src = filename;
        document.body.appendChild(script);
    }

    function detectViewport() {
        var desktop = document.getElementById("desktop");
        var mobile = document.getElementById("mobile");

        if (window.matchMedia("(max-width: 768px)").matches) {
            // Show Mobile
            mobile.style.display = "block";
            desktop.style.display = "none";

            // Load the right javascritp
            loadJs("script/the-museum-mobile.js");

        } else {
            // Show Desktop
            mobile.style.display = "none";
            desktop.style.display = "block";

            // Load the right javascript
            loadJs("script/the-museum-desktop.js");
        }
    }

// INITIALIZE
detectViewport();
window.addEventListener("resize", detectViewport);
