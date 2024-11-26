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
            loadCss("the-museum-mobile.css");

            // Load the right javascritp
            loadJs("the-museum-mobile.js");

        } else {
            // Show Desktop
            mobile.style.display = "none";
            desktop.style.display = "block";

            // Load the right stylesheet
            loadCss("the-museum.css");

            // Load the right javascript
            loadJs("the-museum-desktop.js");
        }
    }

// INITIALIZE
detectViewport();
window.addEventListener("resize", detectViewport);