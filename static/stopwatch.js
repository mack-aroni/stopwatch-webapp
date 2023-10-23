// button/display return calls
const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let countdownTime = 3600; // Initial countdown time (in seconds)
let currentTime = countdownTime; // Initially displayed time
let paused = true;
let intervalId;

// Function to set the active state for buttons
function setActiveButton(activeButton) {
  startBtn.classList.remove("active");
  pauseBtn.classList.remove("active");
  resetBtn.classList.remove("active");
  if (activeButton != resetBtn) {
    activeButton.classList.add("active");
  }
  else {
    activeButton.classList.add("active");
    activeButton.classList.remove("active");
  }
}

// On start button click, execute updateTime every second
startBtn.addEventListener("click", () => {
  if (paused) {
    setActiveButton(startBtn);
    paused = false;
    intervalId = setInterval(updateTime, 1000);
  }
});

// On pause button click, pause the timer and set the active state
pauseBtn.addEventListener("click", () => {
  setActiveButton(pauseBtn);
  if (!paused) {
    paused = true;
    clearInterval(intervalId);
  }
});

// On reset button click, reset the timer and set the active state
resetBtn.addEventListener("click", () => {
  setActiveButton(resetBtn);
  paused = true;
  clearInterval(intervalId);
  currentTime = countdownTime;
  updateTime();
  // clears the document title
  document.title = "Timer";
});

function updateTime() {
  if (!paused && currentTime > 0) {
    currentTime--;
    const hrs = pad(Math.floor(currentTime / 3600));
    const mins = pad(Math.floor((currentTime % 3600) / 60));
    const secs = pad(currentTime % 60);
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
    
    // Update the document title with the remaining time
    document.title = `${hrs}:${mins}:${secs}`;
  }
}

// helper function
function pad(unit) {
  return unit < 10 ? `0${unit}` : unit;
}
