document.getElementById('spinButton').addEventListener('click', spin);

function spin() {
    const emojis = ['🚽', '📷', '🗣️'];
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    reel1.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    reel2.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    reel3.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    checkResult(reel1.textContent, reel2.textContent, reel3.textContent);
}

function checkResult(reel1, reel2, reel3) {
    const result = document.getElementById('result');
    if (reel1 === reel2 && reel2 === reel3) {
        result.textContent = 'Skibidi!';
    } else {
        result.textContent = 'Womp womp.';
    }
}
