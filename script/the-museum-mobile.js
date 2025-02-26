// Only operate on mobile devices
var mobile = document.getElementById("mobile");

if (mobile) {
    // VARIABLES
    // status variables
    var isUserMenuOpen = false;
    var lastTextId = "";
    var activeNumber = null;

    // introduction
    var targetBtn = document.querySelector("#btn-target a");

    // tabs and hidden tables
    var tabBtn = document.querySelector(".tab-icon-container i");
    var tab = document.querySelector(".tab");
    var hiddenTabBtn = document.querySelector(".left-container-m i");
    var hiddenTab = document.querySelector(".left-container-m");

    // numbers and texts
    var numbers = document.querySelectorAll(".number-m");
    var floorDescriptions = document.querySelectorAll(".floor-description-m");
    var textsContainer = document.querySelector(".item-texts-m");
    var texts = document.querySelectorAll(".text-m");
    var contents = document.querySelectorAll(".content-m");

    // maps and descriptions
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

    // user types buttons
    var userToggleBtn = document.querySelector(".user-btn-toggle-m");
    var userBtnContainer = document.querySelector(".user-btn-container-m");
    var userBtns = document.querySelectorAll(".user-btn-m");

    // user status
    var defaultUserType = "general";
    let currentUserType = localStorage.getItem("userType") || defaultUserType;


    // FUNCTIONS
    // 1st FUNCTION:
    // Finding the right target section for the "see more" button
    function changeHref() {
        targetBtn.href = "#target-section-mobile"

        console.log("Bottone target trovato?", targetBtn);
        console.log("Sezione target trovata?", document.getElementById("target-section-mobile"));
    }
    
    // 2nd FUNCTION:
    // Visualizing the description for each floor each and every time the floor gets changed
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
    
    // 3rd FUNCTION:
    // Changing from floor 1 to 2 and viceversa
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
        });
        texts.forEach(function(text) {
            text.style.display = "none";
        });

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
        });
        texts.forEach(function(text) {
            text.style.display = "none";
        });

        map2.style.display = "block";
        btnMap2.classList.add("active");
        btnMap2I.classList.add("active");
    }

    // 4th FUNCTION:
    // Update content based on the user type chosen
    function updateContent(textId) {
        console.log("updateContent called with textId:", textId);
        localStorage.setItem("userType", currentUserType);

        texts.forEach(function (text) {
            text.style.display = "none";
        });

        floorDescriptions.forEach(function(floorDescription) {
            floorDescription.style.display = "none";
        });

        contents.forEach(function(content) {
            content.style.display = "none";
        });

        var currentText = document.getElementById(textId);
        if (currentText) {
            lastTextId = textId;
            var userContent = currentText.querySelector(`.content-m[data-user="${currentUserType}"]`);
            if (userContent) {
                console.log("Contenuto trovato:", userContent);
                currentText.style.display = "block";
                userContent.style.display = "block";
            } else {
                console.log("Contenuto non trovato per userType:", currentUserType);
            }
        }
    }

    
    // EVENT LISTENERS
    // 1ST EVENT:
    // Clicking on the tab to show the hidden descriptions container
    tabBtn.addEventListener("pointerdown", function() {
            tab.style.display = "none";
            hiddenTab.style.display = "block";
        });

        hiddenTabBtn.addEventListener("pointerdown", function() {
            hiddenTab.style.display = "none"
            tab.style.display = "block";
        });

    // 2ND EVENT:
    // adding click event on all numbers, making colors change and the right description pop-up 
    numbers.forEach(function(number) {
        number.addEventListener("pointerdown", function() {
            var textId = this.getAttribute("data-text");
            console.log("textId:", textId);
            var text = document.getElementById(textId);

            if(activeNumber === this) {
                activeNumber = null;

                floorDescriptions.forEach(function(floorDescription) {
                    floorDescription.style.display = "none";
                });

                numbers.forEach(function(number) {
                    number.style.backgroundColor = "white";
                    number.style.color = "#CD5909";
                });

                texts.forEach(function(txt) {
                    txt.style.display = "none";
                });

                tab.style.display = "block";
                hiddenTab.style.display = "none";
                textsContainer.style.display = "none"; 

                changeToDescr();

            } else {

                if (activeNumber) {
                    activeNumber.style.backgroundColor = "white";
                    activeNumber.style.color = "#CD5909";                    
                }
                
                activeNumber = this;

                textsContainer.style.display = "block";
                tab.style.display = "none";
                hiddenTab.style.display = "block";

                number.style.backgroundColor = "#CD5909";
                number.style.color = "white";

                if (text) {
                    texts.forEach(function(txt) {
                        txt.style.display = "none";
                    });

                    text.style.display = "block";

                    floorDescriptions.forEach(function(floorDescription) {
                        floorDescription.style.display = "none";
                    });

                    updateContent(textId);
                }

            }
        }); 
    });

    // 3rd EVENT:
    // Clinking on the chevrons switches from a floor to another
    btnMap1.addEventListener("pointerdown", function() {
        numbers.forEach(function(number) {
            number.style.backgroundColor = "white";
            number.style.color = "#CD5909";
        });
        changeToMap1();
        changeToDescr();

        
    });

    btnMap2.addEventListener("pointerdown", function() {
        numbers.forEach(function(number) {
            number.style.backgroundColor = "white";
            number.style.color = "#CD5909";
        });

        changeToMap2();
        changeToDescr();

        
    });

    // 4th EVENT:
    // clicking on the toggle button moves the whole menu either out of view (when closed) or in view (when open)
    userToggleBtn.addEventListener("pointerdown", function (event) {
        event.preventDefault();
        isUserMenuOpen = !isUserMenuOpen;
        console.log("User toggle button clicked");
        
        console.log("isUserMenuOpen:", isUserMenuOpen);
        console.log("userBtnContainer:", userBtnContainer);

        if (isUserMenuOpen) {
            userBtnContainer.style.right = "-4vw";
        } else {
            userBtnContainer.style.right = "-37vw"; 
        }
    });

    // clicking on an user type button changes its look
    userBtns.forEach(function (userBtn) {
        userBtn.addEventListener("pointerdown", function () {

            if(activeNumber) {
                userBtns.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                this.classList.add("active");

                currentUserType = this.getAttribute("data-user");
                if(lastTextId) {
                    updateContent(lastTextId);
                }
            } else {
                userBtns.forEach(function (btn) {
                    btn.classList.remove("active");
                });

                this.classList.add("active");

                currentUserType = this.getAttribute("data-user");
            }
        });

    });

    // INITIALIZE
    changeToMap1();
    changeToDescr();
    localStorage.setItem("userType", currentUserType);
    changeHref();
    window.addEventListener("resize", changeHref);
}