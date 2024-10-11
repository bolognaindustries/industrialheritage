//THE-MUSEUM.HTML

//1st function
// adding events mouseenter, mouseleave and click on all the numbers, making a preview pop up
    var numbers = document.querySelectorAll(".number");
    var allItems = document.querySelectorAll(".item");
    var listOfItems = document.getElementById("list-of-items");
    var floorDescription = document.getElementById("floor-description");

    numbers.forEach(function(number) {
        number.addEventListener("mouseenter", function() {
            // Get the preview and item IDs
            var previewId = number.getAttribute("data-preview");
            var itemId = number.getAttribute("data-item");

            // Select the corresponding preview
            var preview = document.getElementById(previewId);
            // Select the specific item
            var currentItem = document.getElementById(itemId);

            // Change the color of the number being hovered
            number.style.backgroundColor = "#8CB758";
            number.style.color = "white";

            // Show the preview and the list of items
            preview.style.display = "block";
            listOfItems.style.display = "block";

            // Reset color for all items and set the current item color
            allItems.forEach(function(item) {
                item.style.color = "white"; // Reset color
            });
            currentItem.style.color = "#8CB758"; // Highlight the current item

            // Hide the floor description
            floorDescription.style.display = "none";
        });

        number.addEventListener("mouseleave", function() {
            var previewId = number.getAttribute("data-preview");
            var itemId = number.getAttribute("data-item");
            var preview = document.getElementById(previewId);
            var currentItem = document.getElementById(itemId);

            // Change the color of the number back
            number.style.backgroundColor = "white";
            number.style.color = "#8CB758";

            // Hide the preview and the list of items
            preview.style.display = "none";
            listOfItems.style.display = "none";

            // Show the floor description
            floorDescription.style.display = "block";

            // Reset color for all items
            allItems.forEach(function(item) {
                item.style.color = "white";
            });
        });

        number.addEventListener("click", function() {
            var urlId = number.getAttribute("data-url");
            window.location.href = urlId; // Directly use the URL
        });
    });
//1st function


//2nd function
// adding events mouseenter, mouseleave and click on all the items, making a preview pop up and the color of the numbers change
    var items = document.querySelectorAll(".item")
    var numbers = document.querySelectorAll(".number");

    items.forEach(function(item) {
        item.addEventListener("mouseenter", function() {
        var previewId = item.getAttribute("data-preview");
        var numberId = item.getAttribute("data-number");

        var preview = document.getElementById(previewId)
        var number = document.getElementById(numberId)

        number.style.backgroundColor = "#8CB758";
        number.style.color = "white";

        item.style.color ="#8CB758"

        preview.style.display = "block";

    });

        item.addEventListener("mouseleave", function() {
        var previewId = item.getAttribute("data-preview");
        var numberId = item.getAttribute("data-number");

        var preview = document.getElementById(previewId)
        var number = document.getElementById(numberId)

        number.style.backgroundColor = "white";
        number.style.color = "#8CB758";

        item.style.color ="white"

        preview.style.display = "none";

    });

        item.addEventListener("click", function() {
            var urlId = item.getAttribute("data-url");

            var url = document.getElementById(urlId);

            window.location.href = url;

        });


    });
//2nd function


//3rd function
// button that triggers the change of the left container (from floor description to list item and viceversa)
    var button = document.getElementById("list-btn");
    var numbers = document.querySelectorAll(".number");

    button.addEventListener("click", function() {
        var floorDescription = document.getElementById("floor-description");
        var listOfItems = document.getElementById("list-of-items");
        var icon = button.querySelector("i");
        var buttonLook = document.querySelector(".button_container");

        // check if the list is display none or block
        if (listOfItems.style.display === "none") {
            floorDescription.style.display = "none";
            listOfItems.style.display = "block";
            button.innerHTML = "Read the floor description " + icon.outerHTML;
        } else {
            
            floorDescription.style.display = "block";
            listOfItems.style.display = "none";
            button.innerHTML = "See the list of items " + icon.outerHTML;
            buttonLook.style.right = "500px";
        }
    });
//3rd function











