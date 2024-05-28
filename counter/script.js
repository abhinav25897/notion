document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const headingInput = document.getElementById('heading-input');
    const counterHeading = document.getElementById('counter-heading');
    let counter = 0;

    incrementButton.addEventListener('click', () => {
        counter++;
        counterDisplay.textContent = counter;
    });

    decrementButton.addEventListener('click', () => {
        counter--;
        counterDisplay.textContent = counter;
    });

    headingInput.addEventListener('input', () => {
        counterHeading.textContent = headingInput.value || 'Counter Widget';
    });
});
