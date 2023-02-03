//
$(document).ready(function(){

//display current day, date and time
const now = moment().format('dddd Do MMMM YYYY, h:mm a');
$("#currentDay").text(now);

let timeNow = moment().hour();
console.log(timeNow);

//Create timeblocks dynamically
const hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
hoursArray.forEach(element => {
    const timeBar = $('<div>');
    timeBar.addClass("row rounded time-label");
    $('.time-block').append(timeBar);

    const timeCol = $('<span>');
    timeCol.addClass("col-md-2 hour");
    if (element < 12) {
        timeCol.text(element + ' AM');

    } else if (element == 12) {

        timeCol.text(element + ' PM');
    } else {
        timeCol.text(element-12 + ' PM');
    }
    timeCol.attr('id', element);
    timeBar.append(timeCol);

    const inputTask = $('<textarea>');
    inputTask.addClass("col-md-9 description");
    timeBar.append(inputTask);

    const buttonDiv = $('<button>');
    buttonDiv.addClass('btn col-md-1 saveBtn fas fa-sd-card');
    timeBar.append(buttonDiv);
    });

//compare each row of time with the cureent time
//Accordingly set the class to present, past or future
$(".time-label").each(function() {
    const timeDiv = parseInt($(this).children(".hour").attr("id"));
    console.log(timeDiv);
    if (timeNow === timeDiv) {
        // $(this).addClass('present');
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
    const task = $(this).siblings('.description').val();
    const time = $(this).siblings('.hour').attr('id');
    localStorage.setItem(time, task);
    // console.log(task);
    // console.log(time);
});

//Function to retrieve persistent added tasks

$('.description').each(function() {
    const timeDiv = parseInt($(this).siblings('.hour').attr('id'));
    $(this).val(localStorage.getItem(timeDiv));

});

})
