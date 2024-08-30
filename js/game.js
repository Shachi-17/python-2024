// game.js

let score = 0;
const flame = document.getElementById('flame');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

function moveFlame() {
    const x = Math.random() * (window.innerWidth - 80); // Random x position
    const y = Math.random() * (window.innerHeight - 180); // Random y position
    flame.style.transform = `translate(${x}px, ${y}px)`; // Move flame
}

function increaseScore() {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    moveFlame();
    if (score === 3) {
        // Redirect to the second game after reaching score 3
        setTimeout(() => {
            window.location.href = 'secondGame.html'; // Change to your second game page name
        }, 500); // Delay before redirecting
    }
}

flame.addEventListener('click', increaseScore);

// Restart game functionality
restartButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    restartButton.classList.add('hidden');
    moveFlame();
});

// Start the game by moving the flame initially
moveFlame();
