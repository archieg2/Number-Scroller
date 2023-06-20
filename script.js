let currentNumber = localStorage.getItem('number') || 1;
let darkMode = localStorage.getItem('darkMode') === 'true';

function updateNumberOnScroll(event) {
    const delta = Math.sign(event.deltaY);

    // Update the number based on scroll direction
    if (delta > 0) {
        currentNumber++;
    } else if (delta < 0) {
        currentNumber = Math.max(1, currentNumber - 1);
    }

    const numberContainer = document.getElementById('number');
    numberContainer.innerText = currentNumber;
    numberContainer.className = 'numberscrolling';
    setTimeout(() => {
        numberContainer.className = 'number';
    }, 500);

    // Save the number to local storage
    localStorage.setItem('number', currentNumber);
}

function toggleTheme() {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme');
    darkMode = !darkMode;

    const fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.classList.toggle('dark');

    const themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('dark');
    themeButton.classList.toggle('flip');

    const resetButton = document.getElementById('resetButton');
    resetButton.classList.toggle('dark');

    const prestigeButton = document.getElementById('prestigeButton');
    prestigeButton.classList.toggle('dark', darkMode);

    // Save the dark mode state to local storage
    localStorage.setItem('darkMode', darkMode);
}

function fullscreenButtonClick() {
      var elem = document.documentElement;
      if (elem.requestFullscreen) {
            elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
      }
}

function resetCounter() {
    if (confirm('Are you sure you want to reset the counter?')) {
        currentNumber = 1;
        const numberContainer = document.getElementById('number');
        numberContainer.innerText = currentNumber;
        localStorage.setItem('number', currentNumber);
    }
}

function prestigeButtonClick() {
    confirm('Prestiges are coming very soon!')
}

// Add event listener for scroll wheel
window.addEventListener('wheel', updateNumberOnScroll);

// Get and display the stored number and dark mode state on page load
window.addEventListener('load', function() {
    currentNumber = localStorage.getItem('number') || 1;
    const numberContainer = document.getElementById('number');
    numberContainer.innerText = currentNumber;

    darkMode = localStorage.getItem('darkMode') === 'true';
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-theme', darkMode);

    const themeButton = document.getElementById('themeButton');
    themeButton.classList.toggle('dark', darkMode);
    themeButton.classList.toggle('flip', darkMode);

    const resetButton = document.getElementById('resetButton');
    resetButton.classList.toggle('dark', darkMode);

    const prestigeButton = document.getElementById('prestigeButton');
    prestigeButton.classList.toggle('dark', darkMode);

    const fullscreenButton = document.getElementById('fullscreenButton');
    fullscreenButton.classList.toggle('dark', darkMode);
});

// Check if the device is a mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Display warning message if the device is a mobile device
document.addEventListener('DOMContentLoaded', function() {
    const warningMessage = document.getElementById('warningMessage');
    
    if (isMobileDevice()) {
        warningMessage.style.display = 'flex';
    } else {
        warningMessage.style.display = 'none';
    }
});