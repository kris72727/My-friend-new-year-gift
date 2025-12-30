function nextScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function finish() {
    nextScreen('final');
    confetti({
        particleCount: 200,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffffff']
    });
}
