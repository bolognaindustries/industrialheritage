// Only operate on desktop devices
var desktop = document.getElementById("desktop");


if (desktop) {

    // VARIABLES
    // status variables
    var isUserMenuOpen = false;
    var isMouseEnterPaused = false;
    var lastTextId = "";
    var activeNumber = null;


    // variables for triggering numbers, items and their texts
    var numbers = document.querySelectorAll(".number");
    var allItems = document.querySelectorAll(".item");
    var listsOfItems = document.querySelectorAll(".list-of-items");
    var floorDescriptions = document.querySelectorAll(".floor-description");
    var texts = document.querySelectorAll(".text");
    var items = document.querySelectorAll(".item");
    var previews = document.querySelectorAll(".preview");

    // variables for maps and their buttons
    var btnMap1 = document.getElementById("btn-map-1");
    var btnMap2 = document.getElementById("btn-map-2");
    var btnMaps = document.querySelectorAll(".btn-map");
    var maps = document.querySelectorAll(".maps");
    var map1 = document.getElementById("map-container1");
    var map2 = document.getElementById("map-container2");

    // variables for left container buttons and its descriptions
    var btnsLeft = document.querySelectorAll(".button-container-left");
    var btnList = document.getElementById("button-list");
    var btnDescr = document.getElementById("button-description");
    var lists = document.querySelectorAll(".list-of-items");
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");
    var descrs = document.querySelectorAll(".floor-description");
    var descr1 = document.getElementById("description1");
    var descr2 = document.getElementById("description2");

    // variables for user types buttons 
    var userToggleBtn = document.querySelector(".user-btn-toggle");
    var userBtnContainer = document.querySelector(".user-btn-container");
    var userBtns = document.querySelectorAll(".user-btn");
    var contents = document.querySelectorAll(".content");

    // user status
    var defaultUserType = "general";
    let currentUserType = localStorage.getItem("userType") || defaultUserType;


    // FUNCTIONS
    // update content based on the user type chosen
    function updateContent(textId) {
        localStorage.setItem("userType", currentUserType);

        texts.forEach(function (text) {
            text.style.display = "none";
        });

        contents.forEach(function(content) {
            content.style.display = "none";
        });

        var currentText = document.getElementById(textId);
        if (currentText) {
            lastTextId = textId;
            var userContent = currentText.querySelector(`.content[data-user="${currentUserType}"]`);
            if (userContent) {
                currentText.style.display = "block";
                userContent.style.display = "block";
            } 
        }
    }

    // change from description to list and vicerversa
    function changeToList() {
        btnsLeft.forEach(function(btnLeft) {
            btnLeft.style.display = "none";
        });
        
        descrs.forEach(function(descr) {
            descr.style.display = "none";
        })

        texts.forEach(function(text) {
            text.style.display = "none";
        });

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

        texts.forEach(function(text) {
            text.style.display = "none";
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

    // change from the map of the first floor to the ground one and viceversa
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


    // EVENT LISTENERS
    // 1ST EVENT: 
    // mouseenter, mouseleave and click on all NUMBERS
    numbers.forEach(function(number) {
        number.addEventListener("mouseenter", function() {
            
            if(!isMouseEnterPaused) {
            var previewId = number.getAttribute("data-preview");
            var itemId = number.getAttribute("data-item");

            var preview = document.getElementById(previewId);
            var currentItem = document.getElementById(itemId);

            number.style.backgroundColor = "#CD5909";
            number.style.color = "white";
            currentItem.style.color = "#CD5909";

            preview.classList.add("preview-show");

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
                item.style.color = "white";
                item.classList.remove("item-hover");
            });

            currentItem.classList.add("item-hover");

            } else {
                return;
            }
            
            changeToList();
        });

        number.addEventListener("mouseleave", function() {

            if(!isMouseEnterPaused) {
            var previewId = number.getAttribute("data-preview");
            var itemId = number.getAttribute("data-item");

            var preview = document.getElementById(previewId);
            var currentItem = document.getElementById(itemId);

            number.style.backgroundColor = "white";
            number.style.color = "#CD5909";
            currentItem.style.color = "white";

            preview.classList.remove("preview-show");
            
            if(btnMap1.classList.contains("active")) {
                list2.style.display = "none";
                list1.style.display = "block";
            } else if (btnMap2.classList.contains("active")) {
                list1.style.display = "none";
                list2.style.display = "block";
            }

            // Reset color for all items
            allItems.forEach(function(item) {
                item.style.color = "white";
                item.classList.remove("item-hover");
            });

            }
        });

        number.addEventListener("click", function(e) {
            // Impedisce che l'evento di click si propaghi al document (evita che venga trattato come un clic fuori)
            e.stopPropagation();
        
            // Se il numero è già attivo, lo deselezioniamo
            if (activeNumber === this) {
                // Desattiviamo il numero e ripristiniamo l'hover
                this.style.backgroundColor = "white";
                this.style.color = "#CD5909";
                activeNumber = null; // Reset del numero attivo
                isMouseEnterPaused = false; // Riprendi l'hover
            } else {
                // Se un altro numero è attivo, lo deselezioniamo
                if (activeNumber) {
                    activeNumber.style.backgroundColor = "white";
                    activeNumber.style.color = "#CD5909";
                }
        
                // Impostiamo il numero cliccato come attivo e fermiamo l'hover
                this.style.backgroundColor = "#CD5909";
                this.style.color = "white";
                activeNumber = this; // Impostiamo questo numero come attivo
                isMouseEnterPaused = true; // Pausa l'hover
            }
        
            console.log("Numero cliccato:", this);
        
            var textId = this.getAttribute("data-text");
        
            // Reset di tutte le preview e descrizioni
            previews.forEach(function(preview) {
                preview.style.display = "none";
            });
        
            floorDescriptions.forEach(function(floorDescription) {
                floorDescription.style.display = "none";
            });
        
            listsOfItems.forEach(function(listOfItems) {
                listOfItems.style.display = "none";
            });
        
            // Modifiche per il numero cliccato
            var previewId = this.getAttribute("data-preview");
            var preview = document.getElementById(previewId);
            preview.style.display = "block";
            
            if (textId) {
                updateContent(textId);
            }
        });
    });

    //2ND EVENT
    // mouseenter, mouseleave and click on all ITEMS
    items.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
            if(!isMouseEnterPaused) {
            var previewId = item.getAttribute("data-preview");
            var numberId = item.getAttribute("data-number");

            var preview = document.getElementById(previewId);
            var number = document.getElementById(numberId);

            number.style.backgroundColor = "#CD5909";
            number.style.color = "white";

            item.classList.add("item-hover");

            preview.style.display = "block";
            }
        });


        item.addEventListener("mouseleave", function() {
            if(!isMouseEnterPaused) {
            var previewId = item.getAttribute("data-preview");
            var numberId = item.getAttribute("data-number");

            var preview = document.getElementById(previewId);
            var number = document.getElementById(numberId);

            number.style.backgroundColor = "white";
            number.style.color = "#CD5909";
            
            allItems.forEach(function(item) {
                item.style.color = "white";
                item.classList.remove("item-hover");
            });

            preview.style.display = "none";
            }
        });

        item.addEventListener("click", function() {
            isMouseEnterPaused = !isMouseEnterPaused;
            var textId = this.getAttribute("data-text");

            if (textId) {
                updateContent(textId);
            }

            floorDescriptions.forEach(function(floorDescription) {
                floorDescription.style.display = "none";
            });

            listsOfItems.forEach(function(listOfItems) {
                listOfItems.style.display = "none";
            });

            var currentText = document.getElementById(textId);
            if(currentText) {
                currentText.style.display = "block";
            }

            if (!isMouseEnterPaused) {
                var numberId = item.getAttribute("data-number");
                var numberElem = document.getElementById(numberId);
                if (numberElem) {
                    var previewId = numberElem.getAttribute("data-preview");
                    var preview = document.getElementById(previewId);
                    if (preview) {
                        preview.style.display = "none";
                    }
                }
            }
        });
    });

    // 3RD EVENT: Description buttons
    // change from list to descr and viceversa when clicking on the writing
    btnList.addEventListener("click", function() {
        changeToList();
    });

    btnDescr.addEventListener("click", function() {
        changeToDescr();
    });

    // 4TH EVENT: Map buttons
    // click on the 2 map buttons to choose the floor
    btnMap1.addEventListener("click", function() {
        changeToMap1();
    });

    btnMap2.addEventListener("click", function() {
        changeToMap2();
    });

    // 5TH EVENT: User Type Buttons
    // clicking on the toggle button moves the whole menu either out of view (when closed) or in view (when open)
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

    // 4TH EVENT: Everything else
    // clicking outside the numbers is going to make the click on the numbers disappear
    document.addEventListener("click", function(e) {
        if (e.target.closest(".user-btn-container") || e.target.closest(".user-btn-toggle")) {
            return; // Esce dalla funzione senza fare nulla
        }

        // Se il clic non è su un numero attivo
        if (!e.target.classList.contains("number") && activeNumber !== null) {
            // Desattiviamo il numero attivo e ripristiniamo l'hover
            activeNumber.style.backgroundColor = "white";
            activeNumber.style.color = "#CD5909";
            activeNumber = null; // Reset del numero attivo
            isMouseEnterPaused = false; // Riprendi l'hover

            // Nascondi la preview
            previews.forEach(function(preview) {
                if(preview) {
                    preview.style.display = "none";
                }
            });

            changeToList();
            
        }
    });


    window.addEventListener("scroll", function() {
        console.log("Pagina scesa! Offset attuale:", window.scrollY);
        console.trace(); // Mostra lo stack delle funzioni che hanno portato allo scroll
    });

    document.addEventListener("DOMContentLoaded", function() {
        const target = document.getElementById("target-section");
        if (target) {
            console.log("Offset top del target:", target.offsetTop);
            console.log("Bounding Client Rect:", target.getBoundingClientRect());
        } else {
            console.log("Elemento target non trovato!");
        }
    });
    

    


    // INITIALIZE
    localStorage.setItem("userType", currentUserType);
    changeToMap1();
    changeToDescr();
}


