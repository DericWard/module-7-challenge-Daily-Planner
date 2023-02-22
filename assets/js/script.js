// must use Jquery and Moment.js

// let todaysDate = moment().toString();
// document.getElementById("currentDay").innerHTML = todaysDate;
// $("#currentDay").html(todaysDate);

$("#currentDay").html(moment().toString());

// for(let i = 7; i < 19; i++ ) {
//     $(".container").append('<div class="row time-block"><div class="col-2 hour">AM</div><textarea class="col-8 past"></textarea><button class="col-2 saveBtn"></button></div>');
// };

$(".container").append('<div class="row time-block"><div class="col-2 hour">9AM</div><textarea class="col-8 past"></textarea> <button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">10AM</div><textarea class="col-8 past"></textarea><button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">11AM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');

$(".container").append('<div class="row time-block"><div class="col-2 hour">12PM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">1PM</div><textarea class="col-8 present"></textarea><button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">2PM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');

$(".container").append('<div class="row time-block"><div class="col-2 hour">3PM</div><textarea class="col-8 future"></textarea> <button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">4PM</div><textarea class="col-8 future"></textarea><button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">5PM</div><textarea class="col-8 future"></textarea> <button class="col-2 saveBtn"></button></div>');



// if time is before 'now' colour text area gray
// if time is current colour text area orange
// if time is future colour text area green
// do this by changing the class name of the textarea

// add a save to disk icon to the buttons
// maybe select a nicer looking font style and size for the text input

// save the text input to local storage


