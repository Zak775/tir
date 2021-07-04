// объявляем переменные
// переменная всего игрового блока
var gameBlock = document.querySelector("#game-block");

// игровое поле объявляем null
var playground = null;

// счётчик мишеней
var counter = 0;

//объявляем переменную для отображения блока с обратным отсчетом
var timerDiv = null;

//объявляем переменную для таймера
var timerBlock = null;

//объявляем переменную для таймера
var timer = 0;
var modalTimer = 0;

// переменная включения/отключения звуков в игре
var customizationButton = document.createElement("button");

// переменные звуков стрельбы
var shot = document.querySelector(".shot");
var hit = document.querySelector(".hit");
var shotAudio;
var hitAudio;

// переменные настроек звука
var modalVolumeSlider = null;
var volumeValue = null;

// переменные оси для отображения очков
var mouseX;
var mouseY;