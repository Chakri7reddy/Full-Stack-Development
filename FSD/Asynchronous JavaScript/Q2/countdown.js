// JavaScript file: countdown.js

let countdownInterval;
let totalSeconds = 0;
let isPaused = false;

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timerDisplay');

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

// Function to start the countdown
function startCountdown() {
    if (countdownInterval) clearInterval(countdownInterval);
    
    if (!isPaused) {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        totalSeconds = minutes * 60 + seconds;
    }
    
    isPaused = false;
    
    countdownInterval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "00:00";
            alert("Time's up!");
        } else {
            totalSeconds--;
            updateDisplay();
        }
    }, 1000);
}

// Function to pause the countdown
function pauseCountdown() {
    isPaused = true;
    clearInterval(countdownInterval);
}

// Function to reset the countdown
function resetCountdown() {
    clearInterval(countdownInterval);
    totalSeconds = 0;
    isPaused = false;
    minutesInput.value = 0;
    secondsInput.value = 0;
    timerDisplay.textContent = "00:00";
}

// Function to update the timer display
function updateDisplay() {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Add event listeners for buttons
startButton.addEventListener('click', startCountdown);
pauseButton.addEventListener('click', pauseCountdown);
resetButton.addEventListener('click', resetCountdown);
