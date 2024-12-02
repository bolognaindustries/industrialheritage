// Only operate on mobile devices
var mobile = document.getElementById("mobile");

if (mobile) {

    // 1st FUNCTION
    // Clicking on the tab to show the hidden descriptions container
    var tabBtn = document.querySelector(".tab-icon-container i");
    var tab = document.querySelector(".tab");
    var hiddenTabBtn = document.querySelector(".left-container-m i");
    var hiddenTab = document.querySelector(".left-container-m");
    
    tabBtn.addEventListener("touchstart", function() {
        tab.style.display = "none";
        hiddenTab.style.display = "block";
    });

    hiddenTabBtn.addEventListener("touchstart", function() {
        hiddenTab.style.display = "none"
        tab.style.display = "block";
    });

    // 2nd FUNCTION
    // adding click event on all numbers, making colors change and the right description pop-up 
    var numbers = document.querySelectorAll(".number-m");
    var floorDescriptions = document.querySelectorAll(".floor-description-m");
    var textsContainer = document.querySelector(".item-texts-m");
    var texts = document.querySelectorAll(".text-m");

    var numberIsClicked = false;

    numbers.forEach(function(number) {
        number.addEventListener("touchstart", function() {
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

            updateContent();
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

    btnMap1.addEventListener("touchstart", function() {
        changeToMap1();
        changeToDescr();
    });

    btnMap2.addEventListener("touchstart", function() {
        changeToMap2();
        changeToDescr();
    });

    // 4TH FUNCTION
    // Clicking on the user button and making all the 3 choices pop up
    var userToggleBtn = document.querySelector(".user-btn-toggle-m");
    var userBtns = document.querySelectorAll(".user-btn-m");
    var userBtn1 = document.getElementById("user-btn1-m");
    var userBtn2 = document.getElementById("user-btn2-m");
    var userBtn3 = document.getElementById("user-btn3-m");

    var defaultUserType = "general";
    var currentUserType = localStorage.getItem("userType") || defaultUserType;
    
    var isUserMenuOpen = false;


    userToggleBtn.addEventListener("touchstart", function() {

        isUserMenuOpen = !isUserMenuOpen; 

        if(!isUserMenuOpen) {
            userBtns.forEach(function(userBtn) {
                userBtn.style.display = "block";
            });
        } else {
            userBtns.forEach(function(userBtn) {
                userBtn.style.display = "none";
            });
        }
    });

    userBtns.forEach(function(userBtn) {
        userBtn.addEventListener("touchstart", function() {

            userBtns.forEach(function(btn) {
                btn.classList.remove("active");
            });

            this.classList.add("active");

            activeUserType = this.getAttribute("data-user");

            updateContent();
        });

    });

    function updateContent() {
        var activeNumber = document.querySelector(".number-m[style*=`background-color: #8CB758`]");
        
        if(!activeNumber) return;
        
        var temporaryUserType = currentUserType;

        var textId = activeNumber.getAttribute("data-text");
        var activeText = document.getElementById(textId);
        var texts = document.querySelectorAll(".text-m");

        texts.forEach(function(txt) {
            txt.style.display = "none";
        });

        var userContent = activeText.querySelector(`.content[data-user="${currentUserType}"]`);

        if (userContent) {
            userContent.style.display = "block";
        }
    }   

    
    // INITIALIZE
    changeToMap1();
    changeToDescr();
    localStorage.setItem("userType", currentUserType);
    updateContent();
}