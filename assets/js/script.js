// must use Jquery and Moment.js

// let todaysDate = moment().toString();
// document.getElementById("currentDay").innerHTML = todaysDate;
// $("#currentDay").html(todaysDate);

$("#currentDay").html(moment().toString());

$(".container").append('<div class="row time-block"><div class="col-2 hour">8AM</div><textarea class="col-8 past"></textarea><button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">1PM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');
$(".container").append('<div class="row time-block"><div class="col-2 hour">4PM</div><textarea class="col-8 future"></textarea> <button class="col-2 saveBtn"></button></div>');
