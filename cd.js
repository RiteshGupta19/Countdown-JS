let day=document.getElementById("day");
let hour=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

   
    var countDownDate = new Date("feb 29, 2025 13:27").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60) );
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)+1;
    
  day.innerHTML=days;
  hour.innerHTML=hours;
  min.innerHTML=minutes;
  sec.innerHTML=seconds;
  
  if (distance < 0) {
    clearInterval(x);
    day.innerHTML="00";
    hour.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

