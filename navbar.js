document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const menu = document.querySelector(".menu");
  
    hamburgerMenu.addEventListener("click", () => {
      menu.classList.toggle("active");
      hamburgerMenu.classList.toggle("active");
    });
  });
  
  