// MUST use JQUERY and MOMENT.JS

let plannerEntries = [];
plannerEntries.length = 9;

function getPlannerEntries(plannerEntries) {
    plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")) || [];
    // plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")); 
    plannerEntries.forEach(function(timeBlockEntry) {
        // console.log("timeblock:" + timeBlockEntry.timeSlot + " : " + "text: " + timeBlockEntry.text);
        $(`.${timeBlockEntry.timeSlot}`).append(` ${timeBlockEntry.text}`)
    });
    // localStorage.clear(plannerEntries);
};

// save the new planner entry to a storage array, create if doesn't exit. Create object and push values to array, send to local storage
function savePlannerEntry(btnID, textEntry) {
    // let plannerEntries = []
    // plannerEntries.length = 9; 
    plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")) || [];
console.log(plannerEntries);
    let matchEntry = plannerEntries.find(function(entry) {
        // console.log(matchEntry);
       let matchedEntry = ((entry.timeSlot == btnID) && (entry.text == textEntry));
       console.log("matched entry: " + matchedEntry);
    });
        console.log("match entry: " + matchEntry);

       
    // );

    let newPlannerEntry = {
        timeSlot: btnID,
        text: textEntry
        };

    // check if plannerEntries includes (btnID && btnID:textEntry)", if so return



// console.log("id: " + btnID + " entry: " + textEntry);
// console.log(newPlannerEntry.timeSlot);
// console.log(newPlannerEntry.text);

console.log("time : " + newPlannerEntry.timeSlot + " text: " + newPlannerEntry.text);


// if array textentry at btnID == textentry then return
// else update array
// maybe use includes  

// or - if the value at the id == then return


    // let checkArray = plannerEntries.find(function(entry) {
    //     entry.timeSlot == btnID;
    // });

    // if (checkArray) {
    //     checkArray.text = textEntry;
    // } else {
        plannerEntries.push(newPlannerEntry);
    // };
// console.log(plannerEntries);
    localStorage.setItem("plannerEntries", JSON.stringify(plannerEntries));
    // getPlannerEntries(plannerEntries);
};

// generate time-blocks and colour the time-block textarea sections to reflect past/present/future time
function generateTimeBlocks() { 
    let now = moment().format('H');
    for(let i = '09'; i < 18; i++ ) {
        $(".container").append(`<div class="row time-block"><div class="col-2 hour">${i}:00</div><textarea class="col-8 ${i}" id="text${i}"></textarea><button class="col-2 saveBtn" id="${i}"></button></div>`);
        if ((i - now) < 0) {
            $("textarea").addClass("future");
        }
        if ((i - now) === 0) {
            $("textarea").addClass("present");
        }
        else $("textarea").addClass("past");
    };
    getPlannerEntries();
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

$("button").click(function() {
    let btnID = $(this).attr("id");
    let textEntry = $(`#text${btnID}`).val();
    savePlannerEntry(btnID, textEntry);
});





    // console.log("button-id:", $(this).attr("id"));
    // console.log("textarea-text:", $(`#text${btnID}`).val());
    // console.log("textarea-text:", textEntry);

// $("textarea").click(function() {
//     console.log("textarea-text:", $(this).val());
// });

// let timeBlockContainer = $(".container");

// $(".saveBtn").on("click", function() {

//     $("button").each(function(index, element) { 
//         console.log("button index: " + index + "    button ID: " + $(element).attr("id"));
//     });

//     $("textarea").each(function(index, element) {
//         console.log("textarea index: " + index +    ". ID: " + $(element).attr("id") +  ". text: " + $(element).val());
//     });

    // let plannerText = $("textarea").val();
    // let plannerTextID = $("textarea").attr("id");
    // let btnID = $(".saveBtn").attr("id");

    // console.log(`btnID: ${btnID}`);
    // console.log(`planner text: ${plannerText}`);
    // console.log(`plannerTextID: ${plannerTextID}`);

    // saveUserInput();
// });

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