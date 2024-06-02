document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');

    let count = 0;

    function updateCounter() {
        counterElement.textContent = count;
    }

    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });

    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });

    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });

    // Initial update
    updateCounter();
});
