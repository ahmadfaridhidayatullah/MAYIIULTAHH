

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SCROLL REVEAL ANIMATION
    // =========================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.12
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add("show"));
    }


    // =========================
    // CONFETTI
    // =========================

    function createConfetti() {
        const confetti = document.createElement("div");

        const colors = ["💗", "💖", "💕", "✨", "🌸", "🎉"];

        confetti.className = "confetti";
        confetti.textContent =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.fontSize = (12 + Math.random() * 16) + "px";
        confetti.style.animationDuration = (3 + Math.random() * 4) + "s";

        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 7000);
    }

    // Mengurangi beban browser
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setInterval(createConfetti, 1200);
    }


    // =========================
    // COUNTDOWN TIMER
    // =========================

    const startTime = Date.now();

    function updateTimer() {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);

        const days = document.getElementById("days");
        const hours = document.getElementById("hours");
        const minutes = document.getElementById("minutes");
        const seconds = document.getElementById("seconds");

        if (!days || !hours || !minutes || !seconds) return;

        days.textContent = String(Math.floor(elapsed / 86400)).padStart(2, "0");

        hours.textContent = String(
            Math.floor((elapsed % 86400) / 3600)
        ).padStart(2, "0");

        minutes.textContent = String(
            Math.floor((elapsed % 3600) / 60)
        ).padStart(2, "0");

        seconds.textContent = String(elapsed % 60).padStart(2, "0");
    }

    updateTimer();
    setInterval(updateTimer, 1000);


    // =========================
    // SURPRISE BUTTON
    // =========================

    window.surprise = function () {

        for (let i = 0; i < 40; i++) {
            setTimeout(createConfetti, i * 60);
        }

        alert(
            "Happy Birthday, Sayangku! 💗\n\n" +
            "Terima kasih sudah hadir di hidupku. " +
            "Semoga kamu selalu bahagia, hari ini dan seterusnya. " +
            "I love you so much! 💕"
        );
    };


    // =========================
    // LOVE GIFTS CONTENT
    // =========================

    const gifts = [
        {
            icon: "💌",
            title: "A Letter For You",
            message: `Happy birthday, sayangku! 💗

Aku mungkin nggak selalu bisa mengungkapkan semua perasaanku lewat kata-kata.

Tapi satu hal yang harus kamu tahu, kehadiranmu adalah salah satu hal terindah yang pernah terjadi dalam hidupku.

Terima kasih sudah menjadi bagian dari hari-hariku. Terima kasih untuk setiap senyuman, tawa, dan cerita yang kita lewati bersama.

Aku berharap kita bisa terus bersama, saling menjaga, dan membuat lebih banyak kenangan indah.

I love you so much! 💕`
        },

        {
            icon: "🌷",
            title: "Your Happiness",
            message: `Untuk kamu yang paling aku sayang.

Semoga hari-harimu selalu dipenuhi kebahagiaan.

Jangan terlalu keras pada dirimu sendiri, ya.

Kalau dunia terasa melelahkan, ingat bahwa kamu sudah melakukan yang terbaik.

Aku berharap senyummu nggak pernah hilang.

You deserve all the happiness in this world! 🌸`
        },

        {
            icon: "🧸",
            title: "A Warm Hug",
            message: `Sending you the biggest hug! 🫂

Kalau aku bisa memberikan sesuatu sekarang, aku ingin memberikan pelukan paling hangat untukmu.

Pelukan yang bisa membuat semua lelahmu sedikit berkurang.

Jangan lupa istirahat, jangan lupa makan, dan jangan lupa bahagia.

Aku selalu berharap yang terbaik untukmu. 💗`
        },

        {
            icon: "💖",
            title: "My Forever Love",
            message: `Dear my favorite person.

Aku nggak tahu bagaimana cerita kita ke depannya.

Tapi aku berharap kita selalu punya alasan untuk bertahan, saling memahami, dan saling mencintai.

Aku nggak menjanjikan semuanya akan selalu sempurna.

Tapi aku ingin terus berusaha memberikan yang terbaik untukmu.

Happy birthday, my love!

Forever yours. 💞`
        }
    ];


    // =========================
    // LOVE PARTICLE ANIMATION
    // =========================

    function createLoveParticle() {

        const heart = document.createElement("div");

        const hearts = ["💗", "💖", "💕", "💘", "✨", "🌸"];

        heart.className = "love-particle";

        heart.textContent =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = (45 + Math.random() * 40) + "vh";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    }


    // =========================
    // OPEN GIFT POPUP
    // =========================

    const giftModal = document.getElementById("giftModal");

    window.openGift = function (index) {

        if (!giftModal || !gifts[index]) return;

        const gift = gifts[index];

        document.getElementById("giftIcon").textContent = gift.icon;
        document.getElementById("giftTitle").textContent = gift.title;
        document.getElementById("giftMessage").textContent = gift.message;

        giftModal.classList.add("active");

        document.body.style.overflow = "hidden";

        for (let i = 0; i < 20; i++) {
            setTimeout(createLoveParticle, i * 70);
        }
    };


    // =========================
    // CLOSE GIFT POPUP
    // =========================

    window.closeGift = function () {

        if (!giftModal) return;

        giftModal.classList.remove("active");

        document.body.style.overflow = "";
    };


    // =========================
    // CLICK OUTSIDE POPUP
    // =========================

    if (giftModal) {
        giftModal.addEventListener("click", function (e) {

            if (e.target === giftModal) {
                window.closeGift();
            }

        });
    }


    // =========================
    // ESCAPE KEY
    // =========================

    document.addEventListener("keydown", function (e) {

        if (e.key === "Escape") {
            window.closeGift();
        }

    });

});
