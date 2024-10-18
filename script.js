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
