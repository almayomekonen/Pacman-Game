const badguy = document.getElementById('badguy');
const pacman = document.getElementById('pacman');

function updateBadguyPosition() {
    const calcPacmanandBadguy = pacman.offsetLeft - badguy.offsetLeft;
    const calcBadguyandPacman = pacman.offsetTop - badguy.offsetTop;
    const distance = Math.sqrt(calcPacmanandBadguy * calcPacmanandBadguy + calcBadguyandPacman * calcBadguyandPacman);

    if (distance > 10) {
        const angle = Math.atan2(calcPacmanandBadguy, calcBadguyandPacman);
        const vx = Math.cos(angle) * 5;
        const vy = Math.sin(angle) * 5;

        badguy.style.left = (badguy.offsetLeft + vx) + 'px';
        badguy.style.top = (badguy.offsetTop + vy) + 'px';
    }
}

window.addEventListener('load', () => {
    setInterval(updateBadguyPosition, 1000);
});