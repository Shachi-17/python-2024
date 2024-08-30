// secondGame.js

let score = 0;
const fallingFlame = document.getElementById('fallingFlame');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restartButton');

function dropFlame() {
    const x = Math.random() * (window.innerWidth - 50); // Random x position for flame
    fallingFlame.style.transform = `translate(${x}px, -150px)`; // Start above the screen
    fallingFlame.style.transition = 'transform 1s linear'; // Smooth falling animation

    setTimeout(() => {
        const flameRect = fallingFlame.getBoundingClientRect();
        if (flameRect.bottom >= window.innerHeight) {
            // If flame falls out of view, game over
            alert('Game Over! Your score: ' + score);
            restartButton.classList.remove('hidden');
        } else {
            // Reset flame position if clicked
            fallingFlame.style.transform = 'translate(' + x + 'px, -150px)';
            dropFlame(); // Keep dropping flames
        }
    }, 1000);
}

fallingFlame.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    fallingFlame.style.transition = 'none'; // Remove transition for immediate repositioning
    dropFlame(); // Drop a new flame
});

// Restart game functionality
restartButton.addEventListener('click', () => {
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    restartButton.classList.add('hidden');
    dropFlame(); // Start the game again
});

// Start the game by dropping the first flame
dropFlame();
