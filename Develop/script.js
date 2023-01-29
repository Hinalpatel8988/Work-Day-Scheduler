var timeDisplay = $('#currentDay');
var today = moment();

function updateTimer() {
  const currentTime = dayjs().format('dddd, MMMM D, YYYY [at] hh:mm:ss a');
  timeDisplay.text(currentTime);
}

setInterval(updateTimer, 1000);

$("#currentDay").text(today.format("dddd, MMMM D, YYYY [at] hh:mm:ss a"));
updateTimer();

var hour = $(".hour");
var description = $(".description");

function timeDisplaycolor() {

for (var i = 0; i < hour.length; i++) {
if (+hour.eq(i).attr("data-index") === +today.format("H")) {
  description.eq(i).addClass("present");
} else if (+hour.eq(i).attr("data-index") < +today.format("H")) {
  description.eq(i).addClass("past");
}  else {
  description.eq(i).addClass("future");
}}
}
timeDisplaycolor()

$(".btn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, value);
});

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));















