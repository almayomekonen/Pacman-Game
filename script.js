
const badguy = document.getElementById('badguy');
debugger;
while(1) {
    let info = badguy.style.right;

    info = parseInt(info) + 10;
    badguy.style.transition = '5s';
    if (info >= document.body.clientHeight) {
        break;
    }

    info = info + "px";
    badguy.style.right = info;
}


function handleKeyDown(data) {
    if (data == 'ArrowRight') {

        moveRight();
    }
    if (data == 'ArrowLeft') {
        moveLeft();
    }
    if (data == 'ArrowUp') {
        moveUp();
    }
    if (data == 'ArrowDown') {
        moveDown();
    }
}
function moveRight() {
    const imgElement = document.getElementById('pacman');
    imgElement.style.transform = 'rotateY(0deg)'
    let info = imgElement.style.left;
    info = parseInt(info) + 10;
    if (info >= document.body.clientWidth) {
        return;
    };

    info = info + 'px';
    imgElement.style.left = info;
}
function moveLeft() {
    const imgElement = document.getElementById('pacman');
    imgElement.style.transform = 'scaleX(-1)'
    let info = imgElement.style.left;
    info = parseInt(info) - 10;
    if (info == 0) {
        return;
    };
    info = info + 'px';
    imgElement.style.left = info;
}
function moveUp() {
    const imgElement = document.getElementById('pacman');
    imgElement.style.transform = 'rotate(-90deg)'
    let info = imgElement.style.top;
    info = parseInt(info) - 10;
    if (info == 0) {
        return;
    };
    info = info + 'px';
    imgElement.style.top = info;
}
function moveDown() {
    const imgElement = document.getElementById('pacman');
    imgElement.style.transform = 'rotate(90deg)'
    let info = imgElement.style.top;
    info = parseInt(info) + 10;
    if (info >= document.body.clientHeight) {
        return;
    }
    info = info + 'px';
    imgElement.style.top = info;
}