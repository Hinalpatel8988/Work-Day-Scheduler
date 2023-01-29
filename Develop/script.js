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

for (var i = 0; i < hour.length; i++) {
if (+hour.eq(i).attr("data-index") === +today.format("H")) {
  description.eq(i).addClass("present");
} else if (+hour.eq(i).attr("data-index") < +today.format("H")) {
  description.eq(i).addClass("past");
}  else {
  description.eq(i).addClass("future");
}
}

$(".btn").click(function (event) {
  event.preventDefault();
  var value = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, value);
});




