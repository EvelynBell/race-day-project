//Generate random number 1-1000 to be used as race number
let raceNumber = Math.ceil(Math.random() * 1000);

//Create variables to store runner's age and registration status
var runnerAge = 20;
var earlyRegister = true;

//If the runner is an adult and early registree, then their race number will be above 1000
if(runnerAge > 18 && earlyRegister === true) {
    raceNumber += 1000;
}

//Conditional statements which output the runner's number and the time of their race depending on their age and registration
if(runnerAge > 18 && earlyRegister === true) {
    console.log(`Your number is ${raceNumber} and your race will start at 9:30 AM. Good luck!`);
} else if(runnerAge > 18 && earlyRegister === false) {
    console.log(`Your number is ${raceNumber} and your race will start at 11:00 AM. Good luck!`);
} else {
    console.log(`Your number is ${raceNumber} and your race will start at 12:30 PM. Good luck!`);
}
