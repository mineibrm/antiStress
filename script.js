const breathingInstruction = document.getElementById('breathing-instruction');

// Function to update breathing instruction text based on time in the cycle
function updateInstruction(time) {
    if (time >= 0 && time < 4) { // Inhale phase (first 4 seconds)
        breathingInstruction.textContent = 'Inhale';
    } else if (time >= 4 && time < 11) { // Hold phase (4-11 seconds)
        breathingInstruction.textContent = 'Hold';
    } else if (time >= 11 && time < 19) { // Exhale phase (11-19 seconds)
        breathingInstruction.textContent = 'Exhale';
    }
}

// Function to get the current time in the 19-second cycle
function getCycleTime() {
    const cycleLength = 19000; // 19-second cycle
    const now = new Date().getTime();
    const cycleStart = now - (now % cycleLength);
    return (now - cycleStart) / 1000; // Return time in seconds
}

// Set an interval to update the instruction text
setInterval(() => {
    const timeInSeconds = getCycleTime();
    updateInstruction(timeInSeconds);
}, 500); // Use a smaller interval for more accurate updates
