// you can write js here
console.log('exo-2');

const isTesting = false; 

let myDate = new Date();

if (isTesting) {
  // --
  myDate = new Date("01/12/2025");
}

const notWE = "Non. c'est pad le WE"; 
const yesWE = "C'est le WE";


const currentDay = myDate.getDay();

if (currentDay === 0 || currentDay === 6) {
  console.log(yesWE);
} else {
  console.log(notWE);
}