var saveBtn= $(".saveBtn")

//today date
$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

//Time-block colors (pa,pr,f)
function timeBlockColor() {
    var hour = moment().hour();

    $(".time-block").each(function() {
        var currHour = parseInt($(this).attr("id"));

        if (currHour > hour) {
            $(this).addClass("future");
        } else if (currHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
