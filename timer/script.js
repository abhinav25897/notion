let timer;
let timeLeft = 60; // Timer duration in seconds, e.g., 60 seconds

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const alarmSound = document.getElementById('alarm-sound');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = 60; // Reset to 60 seconds or desired duration
    updateTimerDisplay();

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timer);
            alarmSound.play();
        }
    }, 1000);
}

startButton.addEventListener('click', startTimer);

document.addEventListener('DOMContentLoaded', updateTimerDisplay);
