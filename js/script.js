// script.js

// Wait for the document to fully load
window.onload = function() {
    const flames = document.querySelectorAll('.flame');
    flames.forEach(flame => {
        flame.style.opacity = 0; // Start with invisible flames
        setTimeout(() => {
            flame.style.opacity = 1; // Fade in the flames
        }, 500); // Delay for 0.5 seconds
    });
};
