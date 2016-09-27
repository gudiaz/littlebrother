// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads




// var time = 0;
// // var lap = 1;

// function reset(){
//   time = 0;
//   // lap = 1;
//   $('#display').html('00:00');
//   // $('#laps').html('');

// }

// function start(){
//   counter = setInterval(count, 1000);
// }

// function stop(){
//   console.log('stopping');
//   clearInterval(counter);
// }

// // function recordLap(){
// //   var converted = timeConverter(time);
// //   $('#laps').append('<p>Lap ' + lap + ' : ' + converted + '</p>');
// //   lap++;
// // }

// function count(){
//   time++;
//   var converted = timeConverter(time);
//   $('#display').html(converted);
// }

// function timeConverter(t){
//   var minutes = Math.floor(t/60);
//   var seconds = t - (minutes * 60);
//   if (seconds < 10){
//     seconds = "0" + seconds;
//   }
//   if (minutes === 0){
//     minutes = "00";
//   } else if (minutes < 10){
//     minutes = "0" + minutes;
//   }
//   return minutes + ":" + seconds;
// }

// // $(document).ready(function (e) {
// //    var $worked = $("#worked");

// //    function update() {
// //        var myTime = $worked.html();
// //        var ss = myTime.split(":");
// //        var dt = new Date();
// //        dt.setHours(ss[0]);
// //        dt.setMinutes(ss[1]);
// //        dt.setSeconds(ss[2]);
       
// //        var dt2 = new Date(dt.valueOf() + 1000);
// //        var ts = dt2.toTimeString().split(" ")[0];
// //        $worked.html(ts);
// //        setTimeout(update, 1000);
// //    }

// //    setTimeout(update, 1000);
// // });
