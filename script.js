// ANIMASI MUNCUL SAAT SCROLL
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// CONFETTI
function createConfetti() {
    const confetti = document.createElement('div');
    const colors = ['💗', '💖', '💕', '✨', '🌸', '🎉'];

    confetti.className = 'confetti';
    confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.fontSize = (12 + Math.random() * 16) + 'px';
    confetti.style.animationDuration = (3 + Math.random() * 4) + 's';

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 7000);
}

setInterval(createConfetti, 450);

// HITUNG WAKTU SEJAK WEBSITE DIBUKA
const startTime = Date.now();

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);

    document.getElementById('days').textContent =
        String(Math.floor(elapsed / 86400)).padStart(2, '0');

    document.getElementById('hours').textContent =
        String(Math.floor((elapsed % 86400) / 3600)).padStart(2, '0');

    document.getElementById('minutes').textContent =
        String(Math.floor((elapsed % 3600) / 60)).padStart(2, '0');

    document.getElementById('seconds').textContent =
        String(elapsed % 60).padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

// KEJUTAN
function surprise() {
    for (let i = 0; i < 40; i++) {
        setTimeout(createConfetti, i * 60);
    }

    alert(
        "Happy Birthday, Sayangku! 💗\n\n" +
        "Terima kasih sudah hadir di hidupku. " +
        "Semoga kamu selalu bahagia, hari ini dan seterusnya. " +
        "I love you so much! 💕"
    );
}
