// Navbar

document.addEventListener('DOMContentLoaded', () => {
    const thematicalTrigger = document.getElementById('thematicalTrigger');
    const thematicalMenu = document.getElementById('thematicalMenu');

    thematicalTrigger.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation(); // Prevent Bootstrap interference
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

// VIEWPORT
// detecting the viewport and showing the right piece of HTML code
    function loadCss(filename) {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = filename;
        document.head.appendChild(link);
    }

    function loadJs(filename) {
        var script = document.createElement("script");
        script.src = filename;
        document.body.appendChild(script);
    }

    function detectViewport() {
        var desktop = document.getElementById("desktop");
        var mobile = document.getElementById("mobile");

        if (window.matchMedia("(max-width: 768px)").matches) {
            // Show Mobile
            mobile.style.display = "block";
            desktop.style.display = "none";

            // Load the right stylesheet
            loadCss("css/the-museum-mobile.css");

            // Load the right javascritp
            loadJs("script/the-museum-mobile.js");

        } else {
            // Show Desktop
            mobile.style.display = "none";
            desktop.style.display = "block";

            // Load the right stylesheet
            loadCss("css/the-museum.css");

            // Load the right javascript
            loadJs("script/the-museum-desktop.js");
        }
    }

// INITIALIZE
detectViewport();
window.addEventListener("resize", detectViewport);
