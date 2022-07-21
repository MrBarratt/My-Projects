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
    timer.innerHTML = printNumber(hours) + ":" + printNumber(minutes) + ":" + printNumber(seconds);
};

function printNumber(num){
  if (num < 10) {
    return "0" + num.toString();
  } else {
    return num;
  }
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