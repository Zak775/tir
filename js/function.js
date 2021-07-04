// создаем блок мишеней
function creatureTir() {
    // создаем блок div
    target = document.createElement("div");
    // индефицируем как класс
    target.classList.add("target");
    // добавляем на игровом поле
    playground.appendChild(target);
}

// Создание блока под игровое поле
function createGameBlock() {
    gameBlock = document.createElement("div");
    gameBlock.id = "game-block";
    document.body.appendChild(gameBlock);
}

// Создание игрового поля, создание счётчика очков
function createPlayground() {
    playground = document.createElement("div");
    playground.id = "playground";
    playground.className = "playground-pos";
    gameBlock.appendChild(playground); // создаем блок div
    countDiv = document.createElement("div");
    countDiv.className = "count-div";
    count = document.createElement("h2");
    count.className = "count";
    count.innerText = "Bank: " + 0 + "$" + count.textContent;

    document.querySelector(".playground-pos").onmousemove = function (event) {
        event = event || window.event;

        mouseX = event.offsetX;
        mouseY = event.offsetY;
    };

    countDiv.appendChild(count);
    playground.appendChild(countDiv);
}

// Создание окна в стартовом меню/настройки
function createModal() {
    var modalBlock = document.createElement("div");
    modalBlock.className = "modal-block";
    modalBlock.style.display = "none";

    var modalBox = document.createElement("div");
    modalBox.className = "modal-box";

    var modalCaption = document.createElement("h2");
    modalCaption.className = "modal-caption";
    modalCaption.innerText = "Settings";

    var modalTextButtonBox = document.createElement("div");
    modalTextButtonBox.className = "modal-text-btn-box";

    var modalTextBox = document.createElement("div");
    modalTextBox.className = "modal-text-box";

    var modalSoundText = document.createElement("p");
    modalSoundText.className = "modal-text";
    modalSoundText.innerText = "Sound";

    var modalVolumeText = document.createElement("p");
    modalVolumeText.className = "modal-text";
    modalVolumeText.innerText = "Volume";

    var modalButtonBox = document.createElement("div");
    modalButtonBox.className = "modal-button-box";

    var modalSoundButton = document.createElement("button");
    modalSoundButton.className = "modal-sound-button btn-grey";
    modalSoundButton.className = "modal-sound-button btn-grey sound-on";

    function toggleSound() {
        var elements = document.getElementsByTagName("audio");
        for (
            var e = 0;
            e < elements.length;
            elements[e].muted = !elements[e].muted, e++
        ) ;
    }

    // Функция для включение и отключения звука в настройках
    modalSoundButton.onclick = function () {
        if (modalSoundButton.className == "modal-sound-button btn-grey sound-on") {
            toggleSound();
            modalSoundButton.className = "modal-sound-button btn-grey sound-off";
        } else if (
            modalSoundButton.className == "modal-sound-button btn-grey sound-off"
        ) {
            toggleSound();
            modalSoundButton.className = "modal-sound-button btn-grey sound-on";
        }
    };

    // Найти как перечислить атрибуты в одну строчку
    modalVolumeSlider = document.createElement("input");
    modalVolumeSlider.id = "loudness";
    modalVolumeSlider.className = "modal-sound-slider";
    modalVolumeSlider.setAttribute("type", "range");
    modalVolumeSlider.setAttribute("min", "0");
    modalVolumeSlider.setAttribute("max", "100");
    modalVolumeSlider.setAttribute("value", volumeValue);
    modalVolumeSlider.setAttribute("step", "0.01");
    modalVolumeSlider.setAttribute("oninput", "setVolume(this)");

    var modalConfirm = document.createElement("button");
    modalConfirm.className = "modal-confirm btn btn-red";
    modalConfirm.innerText = "Confirm";

    gameBlock.appendChild(modalBlock);
    modalBlock.appendChild(modalBox);
    modalBox.appendChild(modalCaption);
    modalBox.appendChild(modalTextButtonBox);
    modalBox.appendChild(modalConfirm);
    modalTextBox.appendChild(modalSoundText);
    modalTextBox.appendChild(modalVolumeText);
    modalButtonBox.appendChild(modalSoundButton);
    modalButtonBox.appendChild(modalVolumeSlider);
    modalTextButtonBox.appendChild(modalTextBox);
    modalTextButtonBox.appendChild(modalButtonBox);

    customizationButton.onclick = function () {
        modalBlock.style.display = "flex";
        modalBox.className = "modal-box modal-box-open";
    };

    modalConfirm.onclick = function () {
        modalBox.className = "modal-box modal-box-close";
        modalTimer = setInterval(function () {
            modalBlock.style.display = "none";
            clearInterval(modalTimer);
        }, 950);
    };
}

// Функция создания блока старта игры
function createStartGame() {
    // Создание блока старта игры
    var startGame = document.createElement("div");
    startGame.id = "start-game";
    gameBlock.appendChild(startGame);
    // Создание блока меню
    var menu = document.createElement("div");
    menu.className = "menu";
    startGame.appendChild(menu);
    // Создание блока стартовой кнопки
    var startButton = document.createElement("button");
    startButton.id = "start-button";
    startButton.className = "btn btn-red btn-animated";
    startButton.innerText = "Start";
    menu.appendChild(startButton);
    // Создание блока кнопки настроек
    customizationButton = document.createElement("button");
    customizationButton.id = "customization-button";
    customizationButton.className = "btn btn-grey btn-animated";

    customizationButton.innerText = "Setting";
    menu.appendChild(customizationButton);

    startButton.onclick = function () {
        startGame.remove();
        game();
    };
}

// Создание таймера
function createTimer() {
    // Создание блока div таймера
    timerDiv = document.createElement("div");
    timerDiv.className = "timer-div";

    // Создается надпись таймера
    var timerText = document.createElement("h2");
    timerText.className = "timer";
    timerText.innerText = "Left Time: ";

    // Создание блока таймера
    timerBlock = document.createElement("span");
    timerBlock.innerText = "40";

    timerText.appendChild(timerBlock);
    timerDiv.appendChild(timerText);
    playground.appendChild(timerDiv);
}

// Создание завершения игры
function createEndGame() {
    var endGame = document.createElement("div");
    endGame.id = "end-game";
    gameBlock.appendChild(endGame);

    var endMenuContainer = document.createElement("div");
    endMenuContainer.id = "end-menu-container";
    endGame.appendChild(endMenuContainer);

    var endGameContent = document.createElement("div");
    endGameContent.id = "end-game-content";
    endMenuContainer.appendChild(endGameContent);

    var youBang = document.createElement("p");
    youBang.className = "you-win";
    youBang.innerText = "Bang!!!";
    endGameContent.appendChild(youBang);

    var youWin = document.createElement("p");
    youWin.className = "you-win";
    youWin.innerText = "You Win!!!";
    endGameContent.appendChild(youWin);

    var score = document.createElement("p");
    score.className = "score";
    score.innerText = count.textContent;
    endGameContent.appendChild(score);

    var endMenu = document.createElement("div");
    endMenu.id = "end-menu";
    endMenuContainer.appendChild(endMenu);

    var restartButton = document.createElement("button");
    restartButton.id = "restart-button";
    restartButton.className = "btn btn-red btn-animated";
    restartButton.innerText = "Restart";
    endMenu.appendChild(restartButton);
    //функция онклика кнопки рестарт
    restartButton.onclick = function () {
        endGame.remove();
        game();
    };

    var returnButton = document.createElement("button");
    returnButton.id = "return-button";
    returnButton.className = "btn btn-grey btn-animated";
    returnButton.innerText = "Back to menu";
    endMenu.appendChild(returnButton);
    //функция онклика кнопки назад в меню
    returnButton.onclick = function () {
        endGame.remove();
        gameBlock.remove();
        startGame();
    };
}

// загружаем аудио в игровой блок
function createAudio() {
    audioShot = document.createElement("audio");
    audioShot.id = "audio-shot";
    audioShot.className = "shot";
    audioShot.src = "./sound/shot.mp3";
    gameBlock.appendChild(audioShot);

    audioHit = document.createElement("audio");
    audioHit.id = "audio-hit";
    audioHit.className = "hit";
    audioHit.src = "./sound/hit.mp3";
    gameBlock.appendChild(audioHit);
}

// функция отображения очков при попадания в мишень
function targetShot() {
    $(target).on("click", function (e) {
        var targetScore = $('<div class="target-shot"></div>');
        targetScore.css({left: e.clientX - 25, top: e.clientY - 75});

        var targetScoreText = $('<h2 class="target-shot-text">10$<h2>');

        $(gameBlock).append(targetScore);
        $(targetScore).append(targetScoreText);
        setInterval(function () {
            targetScore.remove();
        }, 500);
    });
}

// функция стрельбы, по клику передаём в класс выбраный див, если див сопадает идёт звук hit и анимация мишени
function playShot(e) {
    // полученый див записываем в переменную
    var el = e.target;
    // выбраный див сравниваем с объектом мишеней если совпадает идёт звук hit если нет shot
    if (el.classList.contains("target")) {
        // останавливаем звук и сразу запускаем
        audioHit.stop();
        audioHit.play();
        targetShot()
        // при попадании присваиваем классу стили анимации
        el.classList.add("die");
        // функция удаления класса die(анимации) и удаление мишени
        setTimeout(function () {
            target.remove();
            target.classList.remove("die");
        }, 500);
        // функция создания мишеней
        setTimeout(function () {
            // creatureTir();
            targetTir();
        }, 700);
        counter++;
        count.textContent = "Bank: " + counter + 0 + "$"; //  сделать выпрыгинивание количества очков
    } else {
        // останавливаем звук и сразу запускаем
        audioShot.stop();
        audioShot.play();
    }
}

//хешируем аудио для его запуска
function audioTir() {
    HTMLAudioElement.prototype.stop = function () {
        // останавливаем воспроизведение
        this.pause();
        // устанавливаем время воиспроизведения
        this.currentTime = 0.0;
    };
}

// функция случайного числа
function random(max) {
    // случайное число 0 до максимума
    var randomNumber = 1 + Math.random() * (max + 1);
    // округляем до целого числа
    randomNumber = Math.floor(randomNumber);
    // return вернуть результат
    return randomNumber;
}

// включаем скрытые мишени
function openTargets() {
    target.style.display = "block";
    playground.appendChild(target);
}

// удаляем стартовое меню
function hideMenu() {
    startGame.remove();
}

//функция создани target
function targetTir() {
    //переменной присваивается рандомное число от 1 до 12
    //и в зависимости от числа проверкой присваиваются разные
    //координаты появления target
    // for (let i = 0; i < 10; i++) {
    var countTarget = random(10);
    var countLeft = random(1090);
    var countTop = random(375);

    if (countTop <= 375) {
        if (countTop >= 135) {
            target.style.top = countTop + "px";
        } else {
            target.style.top = 300 + "px";
        }
    }
    target.style.backgroundImage = "url('image/tir" + countTarget + ".png')";
    target.style.left = countLeft + "px";
    // target.style.backgroundSize = "100px";
    timerBlock.innerText++;
    playground.appendChild(target);
    // }
}


//Функция следов от пуль
function bulletMarks() {
    $(gameBlock).on("click", function (e) {
        var bulletMarks = $('<div class="bullet-marks"></div>');
        bulletMarks.css({left: e.clientX - 50, top: e.clientY - 73});
        $(gameBlock).append(bulletMarks);
        setInterval(function () {
            bulletMarks.remove();
        }, 200);
    });
}

// создаем блок облаков
function creatureCloud() {
    // создаем блок div
    cloud = document.createElement("div");
    // индефицируем как класс
    cloud.classList.add("cloud");
    cloud.style.backgroundImage = "url('image/image7.png')";
    var lifeCloud = setInterval(function () {
        cloud.style.transition = "all 0.2s";
        cloud.style.left = cloud.offsetLeft + 1 + "px";

        if (cloud.offsetLeft > 1200) {
            cloud.remove();
            clearInterval(lifeCloud);
        }
    }, 50);
    // добавляем на игровом поле
    playground.appendChild(cloud);
}

// создаем блок облаков2
function creatureTargetCloud() {
    // создаем блок div
    targetCloud = document.createElement("div");
    // индефицируем как класс
    targetCloud.className = "target-cloud";
    // targetCloud.classList.add("target");
    targetCloud.style.backgroundImage = "url('image/cloud1.png')";

    var lifeTargetCloud = setInterval(function () {
        targetCloud.style.left = targetCloud.offsetLeft + 1 + "px";
        if (targetCloud.offsetLeft == -45) {
            playground.style.transition = "3s";
            playground.style.filter = "brightness(0.7)";
        }
        if (targetCloud.offsetLeft == 350) {
            playground.style.filter = "none";
        }

        if (targetCloud.offsetLeft > 1200) {
            targetCloud.remove();
            clearInterval(lifeTargetCloud);
        }
    }, 30);
    playground.appendChild(targetCloud);
}

//Функция запуска таймера
function timerGame() {
    timer = setInterval(function () {
        timerBlock.innerText = timerBlock.innerText - 1;
        if (timerBlock.innerText == 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// Фунция инициализации аудио компонентов
function init() {
    shotAudio = document.getElementById("audio-shot");
    hitAudio = document.getElementById("audio-hit");
    loudness = document.getElementById("loudness");
}

// Фунция установки громкости
function setVolume(el) {
    volumeValue = el.value;
    shotAudio.volume = volumeValue / 100;
    hitAudio.volume = volumeValue / 100;
    console.log(volumeValue / 100);
    modalVolumeSlider.setAttribute("value", volumeValue);
}