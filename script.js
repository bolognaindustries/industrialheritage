// navbar

document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        const isExpanded = thematicalMenu.classList.contains('show');
        thematicalMenu.classList.toggle('show', !isExpanded); // Toggle visibility
    });

    // Close nested menu if clicking outside
    document.addEventListener('click', (e) => {
        if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
            thematicalMenu.classList.remove('show');
        }
    });
});

// user selection

document.addEventListener("DOMContentLoaded", function () {
    const users = document.querySelectorAll(".user-img");
    let activeUser = null; // Store the currently active user

    users.forEach(user => {
        user.addEventListener("click", function () {
            // Reset the previous active user's image
            if (activeUser && activeUser !== user) {
                activeUser.src = activeUser.src.replace("Inverted.png", ".png");
            }

            // Toggle the clicked user's image
            if (user === activeUser) {
                user.src = user.src.replace("Inverted.png", ".png");
                activeUser = null; // Deselect if clicked again
            } else {
                user.src = user.src.replace(".png", "Inverted.png");
                activeUser = user;
            }
        });
    });
});


// hidden path images

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const hiddenImages = document.getElementById("hidden-images");
    const pathContainer = document.querySelector(".path-container");

    toggleButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (hiddenImages.style.display === "none" || hiddenImages.style.display === "") {
            hiddenImages.style.display = "flex";
            pathContainer.style.minHeight = "400px"; 

            setTimeout(() => {
                window.scrollBy({
                    top: 100,
                    behavior: "smooth"
                });
            }, 100);
        } else {
            hiddenImages.style.display = "none";
            pathContainer.style.minHeight = "200px";
        }
    });
});



// museum carousel

var title1 = document.getElementById("floor-title1");
var title2 = document.getElementById("floor-title2");

function updateTitle() {
    var activeItem = document.querySelector(".carousel-item.active img")

    if(activeItem) {
        title1.style.display = "none";
        title2.style.display = "none";

        if(activeItem.id === "img1") {
            title1.style.display = "block";
        } else if(activeItem.id === "img2") {
            title2.style.display = "block";
        }
    }
}

updateTitle();

document.querySelector("#myCarousel").addEventListener("slid.bs.carousel", updateTitle);

document.getElementById('toggle-image').addEventListener('click', function (e) {
    e.preventDefault();
    const hiddenImages = document.getElementById('hidden-images');
    hiddenImages.style.display = hiddenImages.style.display === 'flex' ? 'none' : 'flex';
});

