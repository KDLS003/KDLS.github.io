document.addEventListener("DOMContentLoaded", function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const menu = document.querySelector('.menu');
  const serviceContainer = document.querySelector('.service-container');
  const services = Array.from(document.querySelectorAll('.service'));
  const servicePagination = document.querySelector('.service-pagination');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
  });

  const bookNowButton = document.querySelector('#book-now-button');
  bookNowButton.addEventListener('click', () => {
    modal.style.display = "block";
  });

  

  // Get the modal element
var modal = document.getElementById("myModal");

// Get all the buttons with the class "book-now"
var bookNowButtons = document.querySelectorAll(".book-now");

// Loop through all the buttons and add a click event listener
bookNowButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Show the modal
    modal.style.display = "block";

    // Get the service information
    var serviceInfo = this.closest(".service-info");

    // Populate the modal form with the service information
    var serviceTitle = serviceInfo.querySelector("h3").textContent;
    var serviceDate = new Date().toLocaleDateString();
    var serviceTime = new Date().toLocaleTimeString();
    var form = modal.querySelector("form");
    form.querySelector("#service").value = serviceTitle;
    form.querySelector("#date").value = serviceDate;
    form.querySelector("#time").value = serviceTime;
  });
});

// Get the close button
var closeButton = document.querySelector(".close");

// Add a click event listener to the close button
closeButton.addEventListener("click", function() {
  // Hide the modal
  modal.style.display = "none";
});

// Add a click event listener to the modal background
modal.addEventListener("click", function(event) {
  // Hide the modal if the user clicks outside the modal content
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



  // Initialize variables to track the current and previous services
  let currentService = 0;
  let prevService = services.length - 1;

  // Update the services to display the current and previous services
  function updateServices() {
    services[prevService].classList.remove('active');
    services[currentService].classList.add('active');
    servicePagination.children[prevService].classList.remove('active');
    servicePagination.children[currentService].classList.add('active');
  }

  // Swipe functionality for mobile devices
  let startX, startY, endX, endY;
  serviceContainer.addEventListener('touchstart', function(event) {
    startX = event.touches[0].pageX;
    startY = event.touches[0].pageY;
  });
  serviceContainer.addEventListener('touchmove', function(event) {
    endX = event.touches[0].pageX;
    endY = event.touches[0].pageY;
  });
  serviceContainer.addEventListener('touchend', function(event) {
    const deltaX = startX - endX;
    const deltaY = startY - endY;

    // Check if swipe direction was horizontal and if it was a significant swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        // Swipe left, move to the next service
        prevService = currentService;
        currentService = currentService === services.length - 1 ? 0 : currentService + 1;
      } else {
        // Swipe right, move to the previous service
        prevService = currentService;
        currentService = currentService === 0 ? services.length - 1 : currentService - 1;
      }
      // Call the function to update the services
      updateServices();
    }
  });

  // Pagination functionality for desktop devices
  servicePagination.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
      // Get the index of the clicked pagination button
      const index = Array.from(this.children).indexOf(event.target);
      if (index !== currentService) {
        // Update the current and previous services and call the function to update the services
        prevService = currentService;
        currentService = index;
        updateServices();
      }
    }
  });

  // Call the function to display the initial service and pagination button
  updateServices();


  

});
