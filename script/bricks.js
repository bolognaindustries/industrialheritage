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

// 1st FUNCTION 
// Making the carousel work
var slides = document.querySelectorAll(".carousel img");
var infosBig = document.querySelectorAll(".info-table-big");
var dots = document.querySelectorAll(".dot");
var titles1 = document.querySelectorAll(".section1 .item-title");
var buttons = document.querySelectorAll(".closing-button");
var infoSmall = document.querySelector(".info-table-small");
var activeLine = document.querySelector(".active-line");
var inactiveLine = document.querySelector(".inactive-line");
var carousel = document.querySelector(".carousel");
var btnPrev = document.querySelector(".prev")
var btnNext = document.querySelector(".next")
var titleContainers = document.querySelectorAll(".item-title-container");
chevronBtns = document.querySelectorAll(".chevron-button");
xBtns = document.querySelectorAll(".x-button");

var currentSlide = 0;
var isInfoOpen = false;

function updateSlide() {
    //hiding everything at the beginning
    slides.forEach(function (slide) {
        slide.style.display = "none";
    });
    titles1.forEach(function (title) {
        title.style.display = "none";
    });
    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });
    infosBig.forEach(function (infoBig) {
        infoBig.style.display = "none";
    });

    //hiding everything at the beginning

    //show everything for the current slide
    slides[currentSlide].style.display = "block";
    titles1[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");
    infoSmall.style.display = "block";

}

function prevSlide() {
    currentSlide--; //each time it lowers the value of the var currentSlide

    if (currentSlide < 0) {
        currentSlide = slides.length - 1; //it brings the carousel back to last images if we keep on clicking on the prev button when the images are finished
    };

    updateSlide();
    updateLine();
    updateContent();
}

function nextSlide() {
    currentSlide++; //each time it incremenents the value of the var currentSlide

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    };

    updateSlide();
    updateLine();
    updateContent();
}

infoSmall.addEventListener("click", function () {
    infoSmall.style.display = "none";
    infosBig.forEach(function (infoBig) {
        infoBig.style.display = "none";
    });

    infosBig[currentSlide].style.display = "block";

    isInfoOpen = true;
});


dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {

        currentSlide = index;
        updateSlide();
        updateLine();
        updateContent();

        isInfoOpen = false;
    });
});

buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        currentSlide = index;
        infosBig[currentSlide].style.display = "none"
        infoSmall.style.display = "block";
        isInfoOpen = false;
    });
});

function updateLine() {
    var lineSize = dots[currentSlide].getAttribute("data-size") + "%";
    activeLine.style.width = lineSize;
};


if (isInfoOpen) {
    infosBig[currentSlide].style.display = "block";
    infoSmall.style.display = "none";

} else {
    infosBig.forEach(function (infoBig) {
        infoBig.style.display = "none";
    });

    infoSmall.style.display = "block";
}

if (window.innerWidth <= 575.98) {
    chevronBtns.forEach(function(chevronBtn) {
        chevronBtn.style.display = "none";
    });

    xBtns.forEach(function(xBtn) {
        xBtn.style.display = "block";
    });
} else {
    xBtns.forEach(function(xBtn) {
        xBtn.style.display = "none";
    });

    chevronBtns.forEach(function(chevronBtn) {
        chevronBtn.style.display = "block;"
    });
}

// 3rd FUNCTION
// Clicking on the user button and making all the 3 choices pop up
var userToggleBtn = document.querySelector(".user-btn-toggle");
var userBtnContainer = document.querySelector(".user-btn-container");
var userBtns = document.querySelectorAll(".user-btn");
var texts = document.querySelectorAll(".text");
var isUserMenuOpen = false;

// keep track of the current user type, if one isn't applied then use the user type set as default
var defaultUserType = "general";
var currentUserType = localStorage.getItem("userType") || defaultUserType;

// opening and closing the user type buttons
userToggleBtn.addEventListener("pointerdown", function () {
    isUserMenuOpen = !isUserMenuOpen;

    if (isUserMenuOpen) {
        if (window.innerWidth <= 575.98) {
            userBtnContainer.style.right = "-40vw";
        } else {
            userBtnContainer.style.right = "-2vw";
        }
    } else {
        if (window.innerWidth <= 575.98) {
            userBtnContainer.style.right = "0"; 
        } else {
            userBtnContainer.style.right = "-15vw";
        }
    }
});

// clicking on an user type button changes its look
userBtns.forEach(function (userBtn) {
    userBtn.addEventListener("pointerdown", function () {

        userBtns.forEach(function (btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        currentUserType = this.getAttribute("data-user");
        updateContent();
    });

});

// clicking on an user type button changes the content chosen inside the texts
var texts = document.querySelectorAll(".text");
var contents = document.querySelectorAll(".content");

function updateContent() {
    localStorage.setItem("userType", currentUserType);


    var textId = slides[currentSlide].getAttribute("data-text");
    if (textId) {
        var rightText = document.getElementById(textId);
        
        console.log("Right text:", rightText);

        if (rightText) {
            var userContent = rightText.querySelector(`.content[data-user="${currentUserType}"]`);

            console.log("User content:", userContent);
            if (userContent) {

                texts.forEach(function (text) {
                    text.style.display = "none";
                });
                contents.forEach(function (content) {
                    content.style.display = "none";
                });
                
                texts[currentSlide].style.display = "block";

                userContent.style.display = "block";
                
                console.log("Text ID:", textId);
            }
        }
    }
}

// 4th FUNCTION
// Only operate on mobile devices
    // Clicking on the tab to show the hidden descriptions container
    var tabBtn = document.querySelector(".tab-icon-container i");
    var tab = document.querySelector(".tab");
    var hiddenTabBtn = document.querySelector(".chevron-container");
    var hiddenTabs = document.querySelectorAll(".item-texts");
    
    tabBtn.addEventListener("pointerdown", function() {
        tab.style.display = "none";

        hiddenTabs.forEach(function(hiddenTab) {
            hiddenTab.style.display = "block";
        });
    });

    hiddenTabBtn.addEventListener("pointerdown", function() {
        
        hiddenTabs.forEach(function (hiddenTab) {
            hiddenTab.style.display = "none";
        });
        
        tab.style.display = "block";
    });

    

// INITIALIZE
localStorage.setItem("userType", currentUserType);
updateSlide();
updateContent();
