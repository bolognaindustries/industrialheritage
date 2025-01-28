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
        userBtnContainer.style.left = "-13%"; // Sposta il contenitore verso sinistra
    } else {
        userBtnContainer.style.left = "0"; // Riporta il contenitore alla posizione originale
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



updateSlide();
updateContent();