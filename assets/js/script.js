var currentDate = moment();

function update() {
    var today = currentDate.format("dddd" + ", " + "MMMM Do" + " " + "HH:mm:ss");
    $("#currentDay").text(today);
}

setInterval (update, 1000);