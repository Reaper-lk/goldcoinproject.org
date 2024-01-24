// mobile menu
(function() {
  document.querySelectorAll(".mobile-menu-toggle").forEach(function(btn) {
    return btn.addEventListener("click", function() {
      document.querySelector(".sidebar").classList.toggle("open");
    });
  });
})();