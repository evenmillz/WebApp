// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Animate the h1 element

// Target and goes and gets the h1 element
const h1 = document.getElementById("colorChange");

// Sets up the the first color
let colorIndex = 0; 

// This function animates the colors of the h1 element 
function animateColor() {

    // Array of colors to cycle through
    const colors = ["red", "orange", "green", "blue", "black"]; 

    // Sets the color of the h1 element to the current color
    h1.style.color = colors[colorIndex]; 

    // Sets the background color of the h1 element to the current color
    colorIndex = (colorIndex + 1) % colors.length; 
}

// Sets the interval to call the animateColor function every 500 milliseconds
setInterval(animateColor, 500);