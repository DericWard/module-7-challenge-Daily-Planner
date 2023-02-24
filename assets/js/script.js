// MUST use Jquery and Moment.js

function saveUserInput() {
};
function displayTimeBlockText() {
};
function getFromLocalStorage() {
    displayTimeBlockText();
};

// generate time-blocks and colour the time-block textarea sections to reflect past/present/future time
function generateTimeBlocks() { 
    let now = moment().format('H');
    for(let i = '09'; i < 18; i++ ) {
        $(".container").append(`<div class="row time-block"><div class="col-2 hour">${i}:00</div><textarea class="col-8" id="${i}"></textarea><button class="col-2 saveBtn" id="btnID-${i}"></button></div>`);
        if ((i - now) < 0) {
            $("textarea").addClass("future");
        }
        if ((i - now) === 0) {
            $("textarea").addClass("present");
        }
        else $("textarea").addClass("past");
    };
    getFromLocalStorage();
};

// display today's date and a real-time clock
function displayDateAndClock() {
    $("#currentDay").html(moment().format('dddd LL').toString());
    $("#currentDay").append(`<div id="time"></div>`);
    setInterval(function() {
        $("#time").html(moment().format('HH:mm:ss'));
    }, 1000); 
    generateTimeBlocks();
};

displayDateAndClock();

// let timeBlockContainer = $(".container");


$(".saveBtn").on("click", function() {

    $("button").each(function(index, element){ 
        console.log("button index: " + index + "    button ID: " + $(element).attr("id"));
    });

    $("textarea").each(function(index, element) {
        console.log("textarea index: " + index +    ". ID: " + $(element).attr("id") +  ". text: " + $(element).val());
    });

    // let plannerText = $("textarea").val();
    // let plannerTextID = $("textarea").attr("id");
    // let btnID = $(".saveBtn").attr("id");

    // console.log(`btnID: ${btnID}`);
    // console.log(`planner text: ${plannerText}`);
    // console.log(`plannerTextID: ${plannerTextID}`);

    // saveUserInput();
});

// add index and $(element).val() to an array
// save the text input to local storage
// add a save to disk icon to the buttons
// get index and $(element).val() array from local storage
// display array from local storage
// if the next day, delete the array and start again




// let todaysDate = moment().toString();
// $("#currentDay").html(todaysDate);
// document.getElementById("currentDay").innerHTML = todaysDate;


// <!-- <div class="row time-block">
// <div class="col-2 hour">8AM</div>
// <textarea class="col-8 past present future"></textarea>
// <button class="col-2 saveBtn"></button>
// </div> -->