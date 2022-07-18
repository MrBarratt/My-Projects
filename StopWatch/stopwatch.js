const timerDisplay = document.getElementById("timer");

let [hours, minutes, seconds] = [0, 0, 0];
let interval = null;

let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;


// Function to increment timer
function displayTimer(){
	console.log("displayTimer",seconds,minutes,hours);
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
const startButton = document.getElementById("start");

//define a variable that will be the reference to your "timer" interval
var timerIntvl;

//Make start button start timer
startButton.addEventListener('click', ()=> {
  console.log("start");
  //start your interval every 1000ms and run the function called displayTimer
  timerIntvl = setInterval(displayTimer, 1000);  
});

// STOP BUTTON
const stopButton = document.getElementById("stop");

stopButton.addEventListener('click', ()=> {
  console.log("stop");
  //stop the interval with the built in javascript method "clearInterval"
  clearInterval(timerIntvl);
});

// RESET BUTTON
const resetButton = document.getElementById("reset");

resetButton.addEventListener('click', ()=> {
 console.log("reset");
 //reset everything back to 0
 [hours, minutes, seconds] = [0, 0, 0];
 timer.innerHTML =  "00:00:00";
});