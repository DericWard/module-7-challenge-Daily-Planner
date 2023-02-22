// MUST use Jquery and Moment.js

let now = moment().format('H');
// display current date
$("#currentDay").html(moment().format('dddd LL').toString());

setInterval(() => {
    $("#time").html(moment().format('HH:mm:ss'));
}, 1000); 

// generate time-blocks and colour the time-block textarea sections to reflect past/present/future time
for(let i = '09'; i < 18; i++ ) {
    $(".container").append(`<div class="row time-block"><div class="col-2 hour">${i}:00</div><textarea class="col-8"></textarea><button class="col-2 saveBtn"></button></div>`);
    if ((i - now) < 0) {
        $("textarea").addClass("future");
    }
    if ((i - now) === 0) {
        $("textarea").addClass("present");
    }
    else $("textarea").addClass("past");
};

setImmediate();








// add a save to disk icon to the buttons
// maybe select a nicer looking font style and size for the text input

// save the text input to local storage
















// if time is before 'now' colour textarea gray (PAST)
// if time is current colour text area orange (PRESENT)
// if time is future colour text area green (FUTURE)
// do this by changing the class name of the textarea


// let todaysDate = moment().toString();
// $("#currentDay").html(todaysDate);
// document.getElementById("currentDay").innerHTML = todaysDate;


// $(".container").append('<div class="row time-block"><div class="col-2 hour">9AM</div><textarea class="col-8 past"></textarea> <button class="col-2 saveBtn"></button></div>');
// $(".container").append('<div class="row time-block"><div class="col-2 hour">10AM</div><textarea class="col-8 past"></textarea><button class="col-2 saveBtn"></button></div>');
// $(".container").append('<div class="row time-block"><div class="col-2 hour">11AM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');

// $(".container").append('<div class="row time-block"><div class="col-2 hour">12PM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');
// $(".container").append('<div class="row time-block"><div class="col-2 hour">1PM</div><textarea class="col-8 present"></textarea><button class="col-2 saveBtn"></button></div>');
// $(".container").append('<div class="row time-block"><div class="col-2 hour">2PM</div><textarea class="col-8 present"></textarea> <button class="col-2 saveBtn"></button></div>');

// $(".container").append('<div class="row time-block"><div class="col-2 hour">3PM</div><textarea class="col-8 future"></textarea> <button class="col-2 saveBtn"></button></div>');
// $(".container").append('<div class="row time-block"><div class="col-2 hour">4PM</div><textarea class="col-8 future"></textarea><button class="col-2 saveBtn"></button></div>');
// $(".container").append('<div class="row time-block"><div class="col-2 hour">5PM</div><textarea class="col-8 future"></textarea> <button class="col-2 saveBtn"></button></div>');

// if ((i - now) < 0) {
//     $("textarea").addClass("future");
// }
// if ((i - now) === 0) {
//     $("textarea").addClass("present");
// }
// else $("textarea").addClass("past");



// <!-- <div class="row time-block">
// <div class="col-2 hour">8AM</div>
// <textarea class="col-8 present"></textarea>
// <button class="col-2 saveBtn"></button>
// </div> -->