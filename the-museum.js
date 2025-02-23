// MOBILE
// all the functions for mobile devices
    function onlyMobile(context) {
        var tabBtn = context.querySelector(".tab-icon-container i");
        var tab = context.querySelector(".tab");
        var hiddenTabBtn = context.querySelector(".left-container i");
        var hiddenTab = context.querySelector(".left-container");

        // 1st FUNCTION 
        // Clicking on the tab to show the hidden descriptions container
            tabBtn.addEventListener("click", function() {
                tab.style.display = "none";
                hiddenTab.style.display = "block";
            });

            hiddenTabBtn.addEventListener("click", function() {
                hiddenTab.style.display = "none"
                tab.style.display = "block";
            });
    }

// DESKTOP
// all the functions for desktop devices

// Navbar

document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        const isExpanded = thematicalMenu.classList.contains('show');
        thematicalMenu.classList.toggle('show', !isExpanded);
    });

    // Prevent menu from closing when clicking inside
    thematicalMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
            thematicalMenu.classList.remove('show');
        }
    });
});


    function onlyDesktop(context) {
        var numbers = context.querySelectorAll(".number");
        var allItems = context.querySelectorAll(".item");
        var listsOfItems = context.querySelectorAll(".list-of-items");
        var floorDescriptions = context.querySelectorAll(".floor-description");
        var texts = context.querySelectorAll(".text");
        var items = context.querySelectorAll(".item");
        var numbers = context.querySelectorAll(".number");

        var btnsLeft = context.querySelectorAll(".button-container-left");
        var btnList = context.querySelector("#button-list");
        var btnDescr = context.querySelector("#button-description");

        var lists = context.querySelectorAll(".list-of-items");
        var list1 = context.querySelector("#list1");
        var list2 = context.querySelector("#list2");

        var descrs = context.querySelectorAll(".floor-description");
        var descr1 = context.querySelector("#description1");
        var descr2 = context.querySelector("#description2");

        // 1st FUNCTION
        // adding events mouseenter, mouseleave and click on all the numbers, making a preview pop up
            numbers.forEach(function(number) {
                
                number.addEventListener("mouseenter", function() {
                if(!isClicked) {
                    var previewId = number.getAttribute("data-preview");
                    var itemId = number.getAttribute("data-item");

                    var preview = context.getElementById(previewId);
                    var currentItem = context.getElementById(itemId);

                    number.style.backgroundColor = "#8CB758";
                    number.style.color = "white";

                    currentItem.style.color = "#8CB758";

                    preview.style.display = "block";

                    floorDescriptions.forEach(function(floorDescription) {
                        floorDescription.style.display = "none"
                    });

                    if(btnMap1.classList.contains("active")) {
                        list2.style.display = "none";
                        list1.style.display = "block";
                    } else if (btnMap2.classList.contains("active")) {
                        list1.style.display = "none";
                        list2.style.display = "block";
                    }

                    allItems.forEach(function(item) {
                        var itemLink = item.querySelector("a");
                        item.style.color = "white";
                    });

                    currentItem.style.color = "#8CB758";
                    }
                });

                number.addEventListener("mouseleave", function() {
                    if(!isClicked) {
                    var previewId = number.getAttribute("data-preview");
                    var itemId = number.getAttribute("data-item");

                    var preview = context.getElementById(previewId);
                    var currentItem = context.getElementById(itemId);

                    number.style.backgroundColor = "white";
                    number.style.color = "#8CB758";

                    currentItem.style.color = "white";

                    preview.style.display = "none";
                    
                    if(btnMap1.classList.contains("active")) {
                        list2.style.display = "none";
                        list1.style.display = "block";
                    } else if (btnMap2.classList.contains("active")) {
                        list1.style.display = "none";
                        list2.style.display = "block";
                    }

                    // Reset color for all items
                    allItems.forEach(function(item) {
                        var itemLink = item.querySelector("a");
                        item.style.color = "white";
                    });

                    }
                });
            });

        // 2nd FUNCTION
        // adding events mouseenter, mouseleave and click on all the items, making a preview pop up and the color of the numbers change
            items.forEach(function(item) {

                item.addEventListener("mouseenter", function() {
                    if(!isClicked) {
                    var previewId = item.getAttribute("data-preview");
                    var numberId = item.getAttribute("data-number");

                    var preview = context.getElementById(previewId);
                    var number = context.getElementById(numberId);

                    number.style.backgroundColor = "#8CB758";
                    number.style.color = "white";

                    item.style.color ="#8CB758";

                    preview.style.display = "block";

                    }
                });
        

                item.addEventListener("mouseleave", function() {
                    if(!isClicked) {
                    var previewId = item.getAttribute("data-preview");
                    var numberId = item.getAttribute("data-number");

                    var preview = context.getElementById(previewId);
                    var number = context.getElementById(numberId);

                    number.style.backgroundColor = "white";
                    number.style.color = "#8CB758";

                    item.style.color ="white";

                    preview.style.display = "none";
                    
                    }
                });

                item.addEventListener("click", function() {
                    isClicked = !isClicked
                    var textId = item.getAttribute("data-text");
                    
                    var text = context.getElementById(textId);

                    floorDescriptions.forEach(function(floorDescription) {
                        floorDescription.style.display = "none";
                    });

                    listsOfItems.forEach(function(listOfItems) {
                        listOfItems.style.display = "none";
                    });

                    texts.forEach(function(text) {
                        text.style.display = "none";
                    });

                    text.style.display = "block";

                    if (!isClicked) {
                        var previewId = number.getAttribute("data-preview");
                        var preview = context.getElementById(previewId);
                        preview.style.display = "none";
                    }
                });
            });

        // 3rd FUNCTION
        // 2 buttons that trigger the change from the ground floor to the first floor
            function changeToList() {
                btnsLeft.forEach(function(btnLeft) {
                    btnLeft.style.display = "none";
                });
                
                descrs.forEach(function(descr) {
                    descr.style.display = "none";
                })

                if(btnMap1.classList.contains("active")) {
                lists.forEach(function(list) {
                    list.style.display = "none";
                    });
                    list1.style.display = "block";
                } else {
                    lists.forEach(function(list) {
                        list.style.display = "none";
                    });
                    list2.style.display = "block";
                }

                btnDescr.style.display = "block";
            }

            function changeToDescr() {
                btnsLeft.forEach(function(btnLeft) {
                    btnLeft.style.display = "none";
                });
                lists.forEach(function(list) {
                    list.style.display = "none";
                });
                

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

                btnList.style.display = "block";
            }

        // 4th FUNCTION
        // button that triggers the change of the left container (from floor description to list item and viceversa)
            btnList.addEventListener("click", function() {
                changeToList();
            });

            btnDescr.addEventListener("click", function() {
                changeToDescr();
            });
    }

// ALL DEVICES
// all the functions adapted by HTML context
    function selectFrom(context) {
        var numbers = context.querySelectorAll(".number");
        var listsOfItems = context.querySelectorAll(".list-of-items");
        var floorDescriptions = context.querySelectorAll(".floor-description");
        var texts = context.querySelectorAll(".text");

        var btnMap1 = context.querySelector("#btn-map-1");
        var btnMap2 = context.querySelector("#btn-map-2");
        var btnMaps = context.querySelectorAll(".btn-map");
        var floorDescriptions = context.querySelectorAll(".floor-description");

        isClicked = false

        numbers.forEach(function(number) {
            number.addEventListener("click", function() {
                isClicked = !isClicked
                var textId = number.getAttribute("data-text");
                
                var text = context.getElementById(textId);

                floorDescriptions.forEach(function(floorDescription) {
                    floorDescription.style.display = "none";
                });

                listsOfItems.forEach(function(listOfItems) {
                    listOfItems.style.display = "none";
                });

                texts.forEach(function(text) {
                    text.style.display = "none";
                });

                text.style.display = "block";
            });
        });

        btnMap1.addEventListener("click", function() {
            changeToMap1();
        });

        btnMap2.addEventListener("click", function() {
            changeToMap2();
        });
    }

    function changeToMap1(context) {
        var maps = context.querySelectorAll(".maps");
        var map1 = context.querySelector("#map-container1");
        var lists = context.querySelectorAll(".list-of-items");

        floorDescriptions.forEach(function(floorDescription) {
            floorDescription.style.display = "none";
        });
        maps.forEach(function(map) {
            map.style.display = "none";
        });
        btnMaps.forEach(function(btnMap) {
            btnMap.classList.remove("active");
        });
        lists.forEach(function(list) {
            list.style.display = "none"
        });

        map1.style.display = "block";
        btnMap1.classList.add("active");
        changeToDescr();
    }

    function changeToMap2(context) {
        var maps = context.querySelectorAll(".maps");
        var map2 = context.querySelector("#map-container2")
        var lists = context.querySelectorAll(".list-of-items");

        floorDescriptions.forEach(function(floorDescription) {
            floorDescription.style.display = "none";
        });
        maps.forEach(function(map) {
            map.style.display = "none";
        });
        btnMaps.forEach(function(btnMap) {
            btnMap.classList.remove("active");
        });
        lists.forEach(function(list) {
            list.style.display = "none"
        });

        map2.style.display = "block";
        btnMap2.classList.add("active");
        changeToDescr();
    }

// VIEWPORT
// detecting the viewport and showing the right piece of HTML code
    function loadCss(filename) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = filename;
        document.head.appendChild(link);
    }

    function detectViewport() {
        var desktop = document.getElementById("desktop");
        var mobile = document.getElementById("mobile");

        if (window.matchMedia("(max-width: 768px)").matches) {
            // Show Mobile
            mobile.style.display = "block";
            desktop.style.display = "none";

            // Load the right stylesheet
            loadCss("the-museum-mobile.css");

            // Mobile logic
            selectFrom(mobile);
            onlyMobile(mobile);
        } else {
            // Show Desktop
            mobile.style.display = "none";
            desktop.style.display = "block";

            // Load the right stylesheet
            loadCss("the-museum.css");

            // Desktop logic
            selectFrom(desktop);
            onlyDesktop(desktop)
        }
    }

// INITIALIZE
// start all the functions
    detectViewport();
    window.addEventListener("resize", detectViewport);
    changeToMap1(document.getElementById("desktop"));
    changeToMap1(document.getElementById("mobile"));
    changeToDescr();
