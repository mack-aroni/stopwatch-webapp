// button/display return calls
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let countdownTime = parseInt(time); // initial countdown time (in seconds)
console.log(countdownTime);
let nonZero = (countdownTime > 0); // checks for nonzero countdown time, so alarm doesnt automatically play
console.log(nonZero);
let currentTime = countdownTime; // initially displayed time
let paused = false; // pause logic
let end = false; // timer end logic
let intervalId;
updateTime(time) // update timeDisplay for initial time

paused = true; // sets paused to true after initial time update


// helper function to set the active state for buttons
function setActiveButton(activeButton) {
  startBtn.classList.remove("active");
  pauseBtn.classList.remove("active");
  resetBtn.classList.remove("active");
  // if not reset button, follow normal pressed logic
  if (activeButton != resetBtn) {
    activeButton.classList.add("active");
  }
  // else only show click registration, not active press
  else {
    activeButton.classList.add("active");
    activeButton.classList.remove("active");
  }
}

// on start button click, execute updateTime every second
startBtn.addEventListener("click", () => {
  // start logic when timer has run down to 0
  if (end) {
    currentTime = countdownTime;
    end = false
  }
  // standard start logic
  if (paused) {
    setActiveButton(startBtn);
    paused = false;
    intervalId = setInterval(updateTime, 1000);
  }
});

// on pause button click, pause the timer and set the active state
pauseBtn.addEventListener("click", () => {
  setActiveButton(pauseBtn);
  if (!paused) {
    paused = true;
    clearInterval(intervalId);
  }
});

// on reset button click, reset the timer and set the active state
resetBtn.addEventListener("click", () => {
  // removes pause logic 
  if (paused) {
    paused = false
  }
  setActiveButton(resetBtn);
  // resets time 
  currentTime = countdownTime;
  // updates to new time
  updateTime();
  clearInterval(intervalId);
  paused = true;
});

// updates timeDisplay and the title using currentTime
function updateTime() {
  if (!paused && currentTime > 0) {
    // updates timeDisplay
    timeDisplay.textContent = formatTime();
    // updates document title
    document.title = formatTime();
    currentTime--;
  }
  else if (currentTime == 0) {
    timeDisplay.textContent = "00:00:00";
    if (!end && nonZero) {
      const audio = document.getElementById("timerAudio");
      audio.play();
    }
    setActiveButton(resetBtn);
    end = true;
  }
}

// helper function to format currentTime into hrs:min:secs
function formatTime() {
  const hrs = pad(Math.floor(currentTime / 3600));
  const mins = pad(Math.floor((currentTime % 3600) / 60));
  const secs = pad(currentTime % 60);
  return `${hrs}:${mins}:${secs}`
}

// helper function to pad numbers with leading 0s
function pad(unit) {
  return unit < 10 ? `0${unit}` : unit;
}