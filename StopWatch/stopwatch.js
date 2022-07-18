const timerDisplay = document.getElementById("timer");

let [hours, minutes, seconds] = [0, 0, 0];
let interval = null;

let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;


// Function to increment timer
function displayTimer(){

    //Increments seconds to minutes etc
    seconds++;
    if(seconds == 60){
        seconds = 0
        minutes++;
           
        if(minutes == 60){
            minutes = 0
            hours++;
        }
    }

    // Keeps it from going to 99:99:99 & makes it double digits
    if (seconds < 10) {
        displaySeconds = "0" + seconds.toString();  
      } else {
          displaySeconds = seconds;
      }
    if (minutes < 10) {
        displayMinutes = "0" + minutes.toString();  
      } else {
        displayMinutes = minutes;
      }
    if (hours < 10) {
        displayHours = "0" + hours.toString();  
      } else {
        displayHours = hours;
    }

    // Shows time in UI
    timer.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
   
};

// START BUTTON
const starter = document.getElementById("start");
var timeStart = setTimeout(displayTimer);

//Make start button start timer
starter.addEventListener('click', ()=> {
  timeStart;
  window.setInterval(displayTimer, 1000);  
});

// STOP BUTTON
const stopTimer = document.getElementById("stop");

stopTimer.addEventListener('click', ()=> {
  clearTimeout(timeStart);
});