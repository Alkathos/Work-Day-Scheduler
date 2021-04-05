var currentDate = moment();
var today = currentDate.format("dddd" + ", " + "MMMM Do" + " " + "HH:mm:ss");
$("#currentDayAndTime").text(today);