// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const breathingInstruction = document.getElementById('breathing-instruction');
    const restartButton = document.getElementById('restart-button');

    function updateInstruction(time) {
        if (time >= 0 && time < 4) {
            breathingInstruction.textContent = 'Inhale';
        } else if (time >= 4 && time < 11) {
            breathingInstruction.textContent = 'Hold';
        } else if (time >= 11 && time < 19) {
            breathingInstruction.textContent = 'Exhale';
        }
    }

    function startBreathingCycle() {
        const startTime = new Date().getTime();
        let interval;

        interval = setInterval(() => {
            const now = new Date().getTime();
            const timeInSeconds = (now - startTime) / 1000;

            if (timeInSeconds >= 19) {
                clearInterval(interval); // Stop the cycle after 19 seconds
                breathingInstruction.textContent = 'Cycle Complete';
                restartButton.style.display = 'block'; // Show the restart button
            } else {
                updateInstruction(timeInSeconds); // Continue updating during the cycle
            }
        }, 1000); // 1-second interval
    }

    // Start the breathing cycle when the page is loaded
    startBreathingCycle();

    // Restart the cycle when the button is clicked
    restartButton.addEventListener('click', () => {
        restartButton.style.display = 'none'; // Hide the restart button
        startBreathingCycle(); // Restart the cycle
    });
});
