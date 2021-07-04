// запускаем стартовое меню
function startGame() {
    createGameBlock();
    createStartGame();
    bulletMarks();
    createModal();
}

// запускаем игровое поле
function game() {
    createPlayground();
    createTimer();
    creatureTir();
    openTargets();
    timerGame();
    creatureCloud();
    creatureTargetCloud();
}

// запускаем конец игры
function endGame() {
    playground.remove();
    createEndGame();
    counter = "clear";
    counter = 0;
}

// запйскаем стартовое меню
startGame();

// запускаем функцию кеширования аудио
audioTir();
createAudio();
// по клику запускаем функцию playShot и ложим кликнутый див в переменную
document.body.addEventListener("click", playShot);








