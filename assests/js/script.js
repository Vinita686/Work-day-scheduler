//
$(document).ready(function(){

//display current day, date and time
const now = moment().format('dddd Do MMMM YYYY, h:mm:ss a');
$("#currentDay").text(now);

let timeNow = moment().format('h');
console.log(timeNow);

//compare each row of time with the cureent time
//Accordingly set the class to present, past or future
$(".time-label").each(function() {
    var timeDiv = $(this).attr("id");
    // console.log(timeDiv);
    if (timeNow === timeDiv) {
        $(this).children('.description').addClass('present');

    } else if (timeNow < timeDiv) {
        $(this).children('.description').addClass('future');

    } else if (timeNow > timeDiv) {
        $(this).children('.description').addClass('past');
    }
});

//function to save the schedules to local storage
$('.saveBtn').click(function(event) {
    event.preventDefault();    
    let task = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, task);
    // console.log(task);
    // console.log(time);
});









})
