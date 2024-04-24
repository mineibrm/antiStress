const breathingInstruction = document.getElementById('breathing-instruction');

function updateInstruction(time) {
    if (time < 4) { // Inhale phase (first 4 seconds)
        breathingInstruction.textContent = 'Inhale';
    } else if (time < 11) { // Hold phase (4-11 seconds)
        breathingInstruction.textContent = 'Hold';
    } else { // Exhale phase (11-19 seconds)
        breathingInstruction.textContent = 'Exhale';
    }
}
setInterval(() => {
    const now = new Date().getTime() % 19000; // 19s cycle
    const timeInSeconds = now / 1000;
    updateInstruction(timeInSeconds);
}, 100); // Update every 100m
