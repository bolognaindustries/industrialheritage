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

    navbarCollapse.classList.remove('show');
    navbarToggler.addEventListener('click', (e) => {
        e.stopPropagation();
        navbarCollapse.classList.toggle('show');
    });

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


