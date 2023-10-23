// button/display return calls
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let countdownTime = 3600; // var
let currentTime = countdownTime; // initially displayed time
let paused = true;
let intervalId;

// on start button click execute updateTime every second
startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        intervalId = setInterval(updateTime, 1000);
    }
});

// pauses timer on click at intervalId
pauseBtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        clearInterval(intervalId);
    }
});

// resets timer
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    currentTime = countdownTime;
    updateTime();
});

function updateTime() {
  if (!paused && currentTime > 0) {
      currentTime--;
      const hrs = pad(Math.floor(currentTime / 3600));
      const mins = pad(Math.floor((currentTime % 3600) / 60));
      const secs = pad(currentTime % 60);
      timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
      
      // update the document title with the remaining time
      document.title = `${hrs}:${mins}:${secs}`;
  }
}


function pad(unit) {
    return unit < 10 ? `0${unit}` : unit;
}
