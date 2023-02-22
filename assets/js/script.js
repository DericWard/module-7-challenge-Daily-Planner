// must use Jquery and Moment.js

// let todaysDate = moment().toString();
// document.getElementById("currentDay").innerHTML = todaysDate;
// $("#currentDay").html(todaysDate);

$("#currentDay").html(moment().toString());

$(".container").append('<div class="row time-block">');
$(".container").append('<div class="col-2 hour">7AM</div>');
$(".container").append('<textarea class="col-8 past"></textarea>');
$(".container").append('<button class="col-2 saveBtn"></button>');
