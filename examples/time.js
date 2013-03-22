(function ($) {
  var timeoutButton = document.getElementById("StartTimeout");
  timeoutButton.onclick = function () {
    setTimeout(function () {
      console.log("Timeout trigget: ", new Date());
    }, 2000);
    console.log("Timeout startet: ", new Date());
  };
  var interval;
  $("#StartInterval").click(function () {
    interval = setInterval(function () {
      console.log("Interval trigget: ", new Date());
    }, 2000);
    console.log("Interval startet: ", new Date());
  });
  $("#StopInterval").click(function () {
    clearInterval(interval);
    console.log("Interval stoppet: ", new Date());
  });
}(jQuery));