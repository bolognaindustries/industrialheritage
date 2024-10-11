//section1
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
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });
    titles1.forEach(function(title) {
        title.style.display = "none";
    });
    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });
    
    //hiding everything at the beginning

    //show everything for the current slide
    slides[currentSlide].style.display = "block";
    titles1[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");

    showBigTitle();
    showRightParagraph();
    //show everything for the current slide
}

function prevSlide() {
    currentSlide--; //each time it lowers the value of the var currentSlide

    if(currentSlide < 0) {
        currentSlide = slides.length -1; //it brings the carousel back to last images if we keep on clicking on the prev button when the images are finished
    };

    updateSlide();
    updateLine();
}

function nextSlide() {
    currentSlide++; //each time it incremenents the value of the var currentSlide

    if(currentSlide >= slides.length) {
        currentSlide = 0;
    };

    updateSlide();
    updateLine();
}

infoSmall.addEventListener("click", function() {
    infoSmall.style.display = "none";
    infosBig.forEach(function(infoBig) {
        infoBig.style.display = "none";
    });

    infosBig[currentSlide].style.display = "block";
    pushTheCarousel();

    isInfoOpen = true;
});


dots.forEach(function(dot, index) {
    dot.addEventListener("click", function() {
        
        currentSlide = index;
        updateSlide();
        updateLine();
        showBigTitle();
        showRightParagraph();

        isInfoOpen = false;
    });
});

buttons.forEach(function (button, index) {
    button.addEventListener("click", function() {
        currentSlide = index;
        infosBig[currentSlide].style.display = "none"
        infoSmall.style.display = "block";
        isInfoOpen = false;

        bringTheCarouselBack();
    });
});

function updateLine() {
    var lineSize = dots[currentSlide].getAttribute("data-size") + "px";
    activeLine.style.width = lineSize;
};

function pushTheCarousel() {
    carousel.style.right = "200" + "px";
    btnPrev.style.left = "100" + "px";
    btnNext.style.right = "100" + "px";

    titles1.forEach(function(title) {
        title.style.right = "180" + "px";
    })
};

function bringTheCarouselBack() {
    carousel.style.right = "";
    btnPrev.style.left = "1" + "px";
    btnNext.style.right = "1" + "px";

    titles1.forEach(function(title) {
        title.style.right = "";
    });
};

if(isInfoOpen) {
    infosBig[currentSlide].style.display = "block";
    infoSmall.style.display = "none";

    pushTheCarousel();

} else {
    infosBig.forEach(function(infoBig) {
        infoBig.style.display = "none";
    });

    bringTheCarouselBack();
    infoSmall.style.display = "block";
    
}
//section1



//section2
var titles2 = document.querySelectorAll(".section2 .item-title");
var descrBtns = document.querySelectorAll(".description-icon");
var descrs = document.querySelectorAll(".description");
var paragraphs = document.querySelectorAll(".description-paragraph");


function showBigTitle() {
    titles2.forEach(function(title2) {
        title2.style.display = "none";
    });

    titles2[currentSlide].style.display = "block";
}


descrs.forEach(function(descr) {
    var rightPId = descr.getAttribute("data-p")
    var rightP = document.getElementById(rightPId);
    var isPOpen = false;

    descr.addEventListener("click", function() {

        if(isPOpen === false) {
            rightP.style.display = "block";

            isPOpen = true;
            showRightParagraph();

        } else {
            rightP.style.display = "none";
            paragraphs[currentSlide].style.display = "none"

            isPOpen = false;
        }  
    });
});

function showRightParagraph() {
    paragraphs.forEach(function(paragraph) {
        paragraph.style.display = "none";
    })
    paragraphs[currentSlide].style.display = "block"
}




















//section2





updateSlide();
showBigTitle();
showRightParagraph();