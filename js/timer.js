var clock;

$(document).ready(function() {
    // var scrollorama = $.scrollorama({ blocks:'.scrollblock' });
    
    clock = $('.clock').FlipClock({
      clockFace: 'HourlyCounter',
      autoStart: false,
      callbacks: {
          start: function() {
              $('.message').html('The clock has started!');
          },
          stop: function() {
              $('.message').html('The clock has stopped!');
          }
      }
    });

    $('.clockIn').click(function(e) {
      clock.start();
      var stamp1 = (moment()._d);
      $('#punchin >tbody').append("<tr><td>" + stamp1 + "</td></tr>");
      $('#total').hide();
    });

    $('.clockOut').click(function(e) {
      clock.stop();
      var stamp2 = (moment()._d);
      $('#punchout >tbody').append("<tr><td>" + stamp2 + "</td></tr>");
      var totalSeconds = clock.getTime().time;
      hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;
      minutes = Math.floor(totalSeconds / 60);
      seconds = totalSeconds % 60;
      var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
      // var formattedTime = hours + ':' + minutes + ':' + seconds;
      console.log(formattedTime);
      $('#total').show().text(formattedTime);
    });
});