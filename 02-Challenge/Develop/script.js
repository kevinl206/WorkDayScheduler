// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
// });

// $("#currentDay").text(currentDay.format("MMMM Do YYYY")) 
// var currentDay = moment();
// var timeNow = moment().format('HH');
// var saveBtn = $('.saveBtn');
// var taskList = $('.task-list');
// var textArea = $("textarea");
// var rootEl = $('#root');


var reformatDate = dayjs().format("dddd, MMMM D YYYY");
  $("#currentDay").text(reformatDate);

  const dayJsObject = dayjs();
console.log(dayJsObject.format("dddd, MMMM D YYYY"))

var saveBtn = $(".saveBtn");
var taskList = $(".task-list");
var textArea = $("textarea");
var rootEl = $("#root");

//Input for each hour of time-block
var input9Am = document.getElementById("9AM");
var input10Am = document.getElementById("10AM");
var input11Am = document.getElementById("11AM");
var input12Pm = document.getElementById("12PM");
var input1Pm = document.getElementById("1PM");
var input2Pm = document.getElementById("2PM");
var input3Pm = document.getElementById("3PM");
var input4Pm = document.getElementById("4PM");
var input5Pm = document.getElementById("5PM");

//Submit the event for saving the text into localStorage
var submit9Am = document.getElementById("submit9AM");
var submit10Am = document.getElementById("submit10AM");
var submit11Am = document.getElementById("submit11AM");
var submit12Pm = document.getElementById("submit12PM");
var submit1Pm = document.getElementById("submit1PM");
var submit2Pm = document.getElementById("submit2PM");
var submit3Pm = document.getElementById("submit3PM");
var submit4Pm = document.getElementById("submit4PM");
var submit5Pm = document.getElementById("submit5PM");


function save9am() {
    var value9Am = input9Am.value;
    localStorage.setItem('9am', JSON.stringify(value9Am))
};

function retrieve9am() {
    input9Am.value = JSON.parse(localStorage.getItem('9am'))
};

function save10am() {
    var value10Am = input10Am.value;
    localStorage.setItem('10am', JSON.stringify(value10Am))
};

function retrieve10am() {
    input10Am.value = JSON.parse(localStorage.getItem('10am'))
};

function save11am() {
    var value11Am = input11Am.value;
    localStorage.setItem('11am', JSON.stringify(value11Am))
};

function retrieve11am() {
    input11Am.value = JSON.parse(localStorage.getItem('11am'))
};

function save12pm() {
    var value12Pm = input12Pm.value;
    localStorage.setItem('12Pm', JSON.stringify(value12Pm))
};

function retrieve12pm() {
    input12Pm.value = JSON.parse(localStorage.getItem('12Pm'))
};

function save1pm() {
    var value1Pm = input1Pm.value;
    localStorage.setItem('1Pm', JSON.stringify(value1Pm))
};

function retrieve1pm() {
    input1Pm.value = JSON.parse(localStorage.getItem('1Pm'))
};

function save2pm() {
    var value2Pm = input2Pm.value;
    localStorage.setItem('2Pm', JSON.stringify(value2Pm))
};

function retrieve2pm() {
    input2Pm.value = JSON.parse(localStorage.getItem('2Pm'))
};

function save3pm() {
    var value3Pm = input3Pm.value;
    localStorage.setItem('3Pm', JSON.stringify(value3Pm))
};

function retrieve3pm() {
    input3Pm.value = JSON.parse(localStorage.getItem('3Pm'))
};

function save4pm() {
    var value4Pm = input4Pm.value;
    localStorage.setItem('4Pm', JSON.stringify(value4Pm))
};

function retrieve4pm() {
    input4Pm.value = JSON.parse(localStorage.getItem('4Pm'))
};

function save5pm() {
    var value5Pm = input5Pm.value;
    localStorage.setItem('5Pm', JSON.stringify(value5Pm))
};

function retrieve5pm() {
    input5Pm.value = JSON.parse(localStorage.getItem('5Pm'))
};

//Savebtn event listeners for the buttons that are click to their hours.
submit9Am.addEventListener('click', save9am);
submit10Am.addEventListener('click', save10am);
submit11Am.addEventListener('click', save11am);
submit12Pm.addEventListener('click', save12pm);
submit1Pm.addEventListener('click', save1pm);
submit2Pm.addEventListener('click', save2pm);
submit3Pm.addEventListener('click', save3pm);
submit4Pm.addEventListener('click', save4pm);
submit5Pm.addEventListener('click', save5pm);

// When refreshing the page functions recalls and loads the saved data in local storage from each input on the time-blocks.
retrieve9am();
retrieve10am();
retrieve11am();
retrieve12pm();
retrieve1pm();
retrieve2pm();
retrieve3pm();
retrieve4pm();
retrieve5pm();

//This variable is for the time-block color changing effect
var time = {
  "9AM" : 9,
  "10AM" : 10,
  "11AM" : 11,
  "12PM" : 12,
  "1PM" : 13,
  "2PM" : 14,
  "3PM" : 15,
  "4PM" : 16,
  "5PM" : 17,
}


//If, else if statement to change the block of time based on the timeNOW variable.
$.each(textArea, function(){
    var textAreaId = $(this).attr("id");
    if(time[textAreaId] < timeNow) {
        $(this).addClass("past");
    } else if( time[textAreaId] == timeNow) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});
