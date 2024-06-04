// index.js

const numbers = [3, 0, 100, 6, 16];
let currentIndex = 0;

const showNumberButton = document.getElementById('showNumber');
const resultElement = document.getElementById('result');

showNumberButton.addEventListener('click', () => {
    if (currentIndex < numbers.length) {
        resultElement.textContent = `Next number: ${numbers[currentIndex]}`;
        currentIndex++;
    } else {
        resultElement.textContent = 'No more numbers.';
    }
});


