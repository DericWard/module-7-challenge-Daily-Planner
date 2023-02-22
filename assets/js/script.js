// must use Jquery and Moment.js

let todaysDate = moment().toString();
document.getElementById("currentDay").innerHTML = todaysDate;
// $("#currentDay").textContent = todaysDate;
console.log(todaysDate);