setInterval(myTimer, 1000);

function myTimer() {
  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  
  hours = hours<10? '0'+hours: hours
  minutes = minutes<10? '0'+minutes: minutes
  seconds = seconds<10? '0'+seconds: seconds
  
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

/*function clickButton() {
  document.querySelector("body").style.background = "white"
}*/

let body = document.querySelector('body');
let toggle = document.getElementById('toggleButton');

toggle.onclick = function() {
  toggle.classList.toggle('active');
  body.classList.toggle('active');
  
}


