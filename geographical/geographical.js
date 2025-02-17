<script>
  document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".thematical-trigger").forEach((dropdown) => {
          dropdown.addEventListener("click", function (event) {
              event.preventDefault();
              let submenu = this.nextElementSibling;
              if (submenu.classList.contains("show")) {
                  submenu.classList.remove("show");
              } else {
                  document.querySelectorAll(".thematical-menu").forEach((menu) => menu.classList.remove("show"));
                  submenu.classList.add("show");
              }
          });
      });
  });
</script>
