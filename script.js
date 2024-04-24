const breathingInstruction = document.getElementById('breathing-instruction');

function updateInstruction(time) {
    if (time < 4) {
        breathingInstruction.textContent = 'Inhale';
    } else if (time < 8) {
        breathingInstruction.textContent = 'Hold';
    } else if (time < 12) {
        breathingInstruction.textContent = 'Exhale';
    } else {
        breathingInstruction.textContent = 'Hold';
    }
}

setInterval(() => {
    const now = new Date().getTime() % 16000; // 16s cycle
    const timeInSeconds = now / 1000;
    updateInstruction(timeInSeconds);
}, 100); // Update every 100ms for smoother text transition
