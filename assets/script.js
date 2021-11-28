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
    var time=$(this).siblings(".hour").text();
    var plan=$(this).siblings(".plan").val();

    localStorage.setItem(time, plan);
});

 function usePlanner() {
     $(".hour").each(function() {
         var currHour= $(this).text();
         var currPlan= localStorage.getItem(currHour);

         if(currPlan !== null) {
             $(this).siblings(".plan").val(currPlan);
         }
     });
 }
 
 timeBlockColor();
 usePlanner();