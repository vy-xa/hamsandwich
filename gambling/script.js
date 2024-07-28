document.getElementById('spinButton').addEventListener('click', spin);
document.getElementById('closeButton').addEventListener('click', closeOverlay);

function spin() {
    const emojis = ['🚽', '📷', '🗣️', '🚻', '🛁'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    reel1.style.animation = 'none';
    reel2.style.animation = 'none';
    reel3.style.animation = 'none';

    setTimeout(() => {
        reel1.style.animation = '';
        reel2.style.animation = '';
        reel3.style.animation = '';
    }, 10);

    setTimeout(() => {
        reel1.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        reel2.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        reel3.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        checkResult(reel1.textContent, reel2.textContent, reel3.textContent);
    }, 500);
}

function checkResult(reel1, reel2, reel3) {
    const result = document.getElementById('result');
    const overlay = document.getElementById('overlay');

    if (reel1 === reel2 && reel2 === reel3) {
        result.textContent = 'Congratulations! You win!';
    } else {
        result.textContent = 'Try again!';
    }

    overlay.classList.remove('hidden');
}

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
}
