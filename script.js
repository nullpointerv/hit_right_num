
// Game variables
let timer = 60;
let score = 0;
let hitrandom = 0;

// Function to create bubbles
function makeBubble() {
    let bubbleHTML = "";
    for (let i = 1; i <= 85; i++) {
        const random = Math.floor(Math.random() * 10);
        bubbleHTML += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#panel-bottom").innerHTML = bubbleHTML;
}

// Function to start timer
function makeTimer() {
    const timerInterval = setInterval(function() {
        if (timer > 0) {
            timer--;
            document.getElementById('timeval').textContent = timer;
        } else {
            clearInterval(timerInterval);
            document.querySelector("#panel-bottom").innerHTML = 
                '<h1 style="width:100%; text-align:center; color:#5e348f;">TIME OVER!!!</h1>';
        }
    }, 1000);
}

// Function to generate hit value
function makeHit() {
    hitrandom = Math.floor(Math.random() * 10);
    document.getElementById('hitval').textContent = hitrandom;
}

// Function to update score
function makeScore() {
    score += 10;
    document.getElementById('scoreval').textContent = score;
}

// Event listener for bubble clicks
document.querySelector("#panel-bottom").addEventListener("click", function(details) {
    const clickedElement = details.target;
    if (clickedElement.classList.contains('bubble')) {
        const clickednum = Number(clickedElement.textContent);
        
        if (clickednum === hitrandom) {
            makeScore();
            makeBubble();
            makeHit();
        }
    }
});

// Initialize game
function initGame() {
    makeBubble();
    makeTimer();
    makeHit();
}

// Start the game
initGame();