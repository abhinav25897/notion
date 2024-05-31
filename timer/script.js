let timer;
let timeLeft;

const timerElement = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const alarmSound = document.getElementById('alarm-sound');
const minutesInput = document.getElementById('minutes-input');
const secondsInput = document.getElementById('seconds-input');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    timeLeft = minutes * 60 + seconds;

    if (timeLeft > 0) {
        updateTimerDisplay();
        clearInterval(timer);

        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                alarmSound.play();
            }
        }, 1000);
    } else {
        alert("Please enter a valid time.");
    }
}

startButton.addEventListener('click', startTimer);
