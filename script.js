const inputField = document.getElementById('numberInput');
const resultField = document.getElementById('result');

inputField.addEventListener('input', () => {
  const inputValue = parseInt(inputField.value);

  if (isNaN(inputValue)) {
    resultField.textContent = 'Please enter a number';
  } else if (inputValue < 0) {
    resultField.textContent = 'Enter a positive value';
  } else if (inputValue % 2 === 0) { // Even number
    const nextEvenNumbers = [inputValue + 2, inputValue + 4, inputValue + 6];
    resultField.textContent = `Next 3 even numbers: ${nextEvenNumbers.join(', ')}`;
  } else { // Odd number
    const nextOddNumbers = [inputValue + 2, inputValue + 4, inputValue + 6];
    resultField.textContent = `Next 3 odd numbers: ${nextOddNumbers.join(', ')}`;
  }
});