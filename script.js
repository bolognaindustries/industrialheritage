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
    e.preventDefault(); // Prevent default behavior if needed
    const hiddenImages = document.getElementById('hidden-images');
    hiddenImages.style.display = hiddenImages.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener("DOMContentLoaded", () => {
    const topImages = document.querySelectorAll(".user img");
    const bottomLinks = document.querySelectorAll(".path a");
  
    topImages.forEach((topImage) => {
      topImage.addEventListener("click", () => {
        const newLinks = JSON.parse(topImage.getAttribute("data-links"));
  
        bottomLinks.forEach((link, index) => {
          link.href = newLinks[index];
        });
      });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link default behavior
        const isExpanded = thematicalMenu.classList.contains('show');
        thematicalMenu.classList.toggle('show', !isExpanded); // Toggle visibility
    });

    // Optional: Close nested menu if clicking outside
    document.addEventListener('click', (e) => {
        if (!thematicalTrigger.contains(e.target) && !thematicalMenu.contains(e.target)) {
            thematicalMenu.classList.remove('show');
        }
    });
});

