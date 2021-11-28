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

// save button/local storage
saveBtn.on("click", function() {
    var time=$(this).siblangs(".hour").text();
    var plan=$(this).siblangs(".plan").val();

    localStorage.setItem(time, plan);
});

 function usePlanner() {
     $(".hour").each(function() {
         var currHour= $(this).text();
         var currPLan= localStorage.getItem(currHour);

         if(currPLan !== null) {
             $(this).siblangs(".plan").val(currPlan);
         }
     });
 }