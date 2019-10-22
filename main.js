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

  currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
  
var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
var colorchange = "#" + currentHours + currentMinutes + currentSeconds;

$("#clock").html(currentTimeString);
$("#clock").css("background-color",colorchange);
}



