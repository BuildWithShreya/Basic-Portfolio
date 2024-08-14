// script.js
function myMenuFunction() {
    var navMenu = document.getElementById("myNavMenu");
    navMenu.classList.toggle("show");
}

// Initialize the Typed.js library
const options = {
    strings: ["Programmer", "Student", "Developer"],
    typeSpeed: 50,          // Speed in milliseconds to type each character
    backSpeed: 25,           // Speed in milliseconds to delete each character
    backDelay: 1000,         // Delay before starting to delete
    startDelay: 500,        // Delay before starting the typing effect
    loop: true              // Loop the animation
  };
  
  const typed = new Typed('.typedText', options);
  