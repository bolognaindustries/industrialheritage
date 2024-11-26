// Only operate on desktop devices
var desktop = document.getElementById("desktop");

if (desktop) {

    // 1st FUNCTION
    // adding events mouseenter, mouseleave and click on all the numbers, making a preview pop up
    var numbers = document.querySelectorAll(".number");
    var allItems = document.querySelectorAll(".item");
    var listsOfItems = document.querySelectorAll(".list-of-items");
    var floorDescriptions = document.querySelectorAll(".floor-description");
    var texts = document.querySelectorAll(".text");

    isClicked = false

    numbers.forEach(function(number) {
        
        number.addEventListener("mouseenter", function() {
            if(!isClicked) {
            var previewId = number.getAttribute("data-preview");
            var itemId = number.getAttribute("data-item");

            var preview = document.getElementById(previewId);
            var currentItem = document.getElementById(itemId);

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

            var preview = document.getElementById(previewId);
            var currentItem = document.getElementById(itemId);

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

        number.addEventListener("click", function() {
            isClicked = !isClicked
            var textId = number.getAttribute("data-text");
            
            var text = document.getElementById(textId);

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

    //2nd FUNCTION
    //adding events mouseenter, mouseleave and click on all the items, making a preview pop up and the color of the numbers change
    var items = document.querySelectorAll(".item");
    var numbers = document.querySelectorAll(".number");

    items.forEach(function(item) {

        item.addEventListener("mouseenter", function() {
            if(!isClicked) {
            var previewId = item.getAttribute("data-preview");
            var numberId = item.getAttribute("data-number");

            var preview = document.getElementById(previewId);
            var number = document.getElementById(numberId);

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

            var preview = document.getElementById(previewId);
            var number = document.getElementById(numberId);

            number.style.backgroundColor = "white";
            number.style.color = "#8CB758";

            item.style.color ="white";

            preview.style.display = "none";
            
            }
        });

        item.addEventListener("click", function() {
            isClicked = !isClicked
            var textId = item.getAttribute("data-text");
            
            var text = document.getElementById(textId);

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
                var preview = document.getElementById(previewId);
                preview.style.display = "none";
            }
        });
    });

    //3rd FUNCTION
    // button that triggers the change of the left container (from floor description to list item and viceversa)
    var btnsLeft = document.querySelectorAll(".button-container-left");
    var btnList = document.getElementById("button-list");
    var btnDescr = document.getElementById("button-description");

    var lists = document.querySelectorAll(".list-of-items");
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");

    var descrs = document.querySelectorAll(".floor-description");
    var descr1 = document.getElementById("description1");
    var descr2 = document.getElementById("description2");


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

    btnList.addEventListener("click", function() {
        changeToList();
    });

    btnDescr.addEventListener("click", function() {
        changeToDescr();
    });

    // 4th FUNCTION
    // 2 buttons that trigger the change from the ground floor to the first floor
    var btnMap1 = document.getElementById("btn-map-1");
    var btnMap2 = document.getElementById("btn-map-2");
    var btnMaps = document.querySelectorAll(".btn-map");
    var floorDescriptions = document.querySelectorAll(".floor-description");
    var maps = document.querySelectorAll(".maps");
    var map1 = document.getElementById("map-container1")
    var map2 = document.getElementById("map-container2")
    var lists = document.querySelectorAll(".list-of-items");


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
        lists.forEach(function(list) {
            list.style.display = "none"
        });

        map1.style.display = "block";
        btnMap1.classList.add("active");
        changeToDescr();
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
        lists.forEach(function(list) {
            list.style.display = "none"
        });

        map2.style.display = "block";
        btnMap2.classList.add("active");
        changeToDescr();
    }

    btnMap1.addEventListener("click", function() {
        changeToMap1();
    });

    btnMap2.addEventListener("click", function() {
        changeToMap2();
    });


    // INITIALIZE
    changeToMap1();
    changeToDescr();
}


