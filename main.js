$(document).ready(function() {
    updateClock(); 
    setInterval('updateClock()', 1000);
  });
  
function updateClock ( )
{
  var currentTime = new Date ( );
  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
var colorchange = "#" + currentHours + currentMinutes + currentSeconds;

$("#clock").html(currentTimeString);
$("#clock").css("background-color",colorchange);
}



