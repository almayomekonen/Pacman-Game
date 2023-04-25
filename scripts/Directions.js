function handleKeyDown(PacMove) {
    if (PacMove === 'ArrowRight') {

        moveRight();
    }
    if (PacMove === 'ArrowLeft') {
        moveLeft();
    }
    if (PacMove === 'ArrowUp') {
        moveUp();
    }
    if (PacMove === 'ArrowDown') {
        moveDown();
    }
}