// Only operate on mobile devices
var mobile = document.getElementById("mobile");

if (mobile) {

    // 1st FUNCTION
    // Clicking on the tab to show the hidden descriptions container
    var tabBtn = document.querySelector(".tab-icon-container i");
    var tab = document.querySelector(".tab");
    var hiddenTabBtn = document.querySelector(".left-container-m i");
    var hiddenTab = document.querySelector(".left-container-m");
    
    tabBtn.addEventListener("click", function() {
        tab.style.display = "none";
        hiddenTab.style.display = "block";
    });

    hiddenTabBtn.addEventListener("click", function() {
        hiddenTab.style.display = "none"
        tab.style.display = "block";
    });

    // 2nd FUNCTION
    // adding click event on all numbers, making colors change and the right description pop-up 
    var numbers = document.querySelectorAll(".number-m");
    var floorDescriptions = document.querySelectorAll(".floor-description-m");
    var textsContainer = document.querySelector(".item-texts-m");
    var texts = document.querySelectorAll(".text-m");

    var tab = document.querySelector(".tab");
    var hiddenTab = document.querySelector(".left-container-m");

    var numberIsClicked = false;

    numbers.forEach(function(number) {
        number.addEventListener("click", function() {
            numberIsClicked = !numberIsClicked;

            var textId = number.getAttribute("data-text");
            
            var text = document.getElementById(textId);

            if(!numberIsClicked) {
            floorDescriptions.forEach(function(floorDescription) {
                floorDescription.style.display = "none";
            });

            numbers.forEach(function(number) {
                number.style.backgroundColor = "white";
                number.style.color = "#8CB758";
            });

            texts.forEach(function(txt) {
                txt.style.display = "none";
            })

            tab.style.display = "none";

            hiddenTab.style.display = "block";

            textsContainer.style.display = "block";
            text.style.display = "block";

            number.style.backgroundColor = "#8CB758";
            number.style.color = "white";

            } else {
                textsContainer.style.display = "none";
                tab.style.display = "block";
                hiddenTab.style.display = "none";

                number.style.backgroundColor = "white";
                number.style.color = "#8CB758";

                changeToDescr();
            }
        }); 
    });

    // 3rd FUNCTION
    // 2 buttons that trigger the change from the ground floor to the first floor
    var btnMap1 = document.getElementById("btn-map-1-m");
    var btnMap2 = document.getElementById("btn-map-2-m");
    var btnMap1I = document.querySelector("#btn-map-1-m i");
    var btnMap2I = document.querySelector("#btn-map-2-m i");
    var btnMaps = document.querySelectorAll(".btn-map");
    var btnMapsI = document.querySelectorAll(".btn-map i");
    var floorDescriptions = document.querySelectorAll(".floor-description-m");
    var maps = document.querySelectorAll(".maps");
    var map1 = document.getElementById("map-container1-m")
    var map2 = document.getElementById("map-container2-m")

    var descrs = document.querySelectorAll(".floor-description-m");
    var descr1 = document.getElementById("description1-m");
    var descr2 = document.getElementById("description2-m");

    function changeToDescr() {
        
        if(btnMap1.classList.contains("active")) {
            descrs.forEach(function(descr) {
            descr.style.display = "none";
            })

            descr1.style.display = "block";
        } else {
            descrs.forEach(function(descr) {
            descr.style.display = "none";
            })
            descr2.style.display = "block";
        }
    }

    function changeToMap1() {
        floorDescriptions.forEach(function(floorDescription) {
            floorDescription.style.display = "none";
        });
        maps.forEach(function(map) {
            map.style.display = "none";
        });
        btnMaps.forEach(function(btnMap) {
            btnMap.classList.remove("active");
        });
        btnMapsI.forEach(function(btnMapI) {
            btnMapI.classList.remove("active");
        })

        map1.style.display = "block";
        btnMap1.classList.add("active");
        btnMap1I.classList.add("active");
    }

    function changeToMap2() {
        floorDescriptions.forEach(function(floorDescription) {
            floorDescription.style.display = "none";
        });
        maps.forEach(function(map) {
            map.style.display = "none";
        });
        btnMaps.forEach(function(btnMap) {
            btnMap.classList.remove("active");
        });
        btnMapsI.forEach(function(btnMapI) {
            btnMapI.classList.remove("active");
        })

        map2.style.display = "block";
        btnMap2.classList.add("active");
        btnMap2I.classList.add("active");
    }

    btnMap1.addEventListener("click", function() {
        changeToMap1();
        changeToDescr();
    });

    btnMap2.addEventListener("click", function() {
        changeToMap2();
        changeToDescr();
    });

    // INITIALIZE
    changeToMap1();
    changeToDescr();
}