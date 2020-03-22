var about = document.getElementById("about");
var aboutBtn = document.getElementsByClassName("aboutBtn");
var span = document.getElementsByClassName("close");

aboutBtn[0].onclick = function() {
  about.style.display = "block";
}
aboutBtn[1].onclick = function() {
  about.style.display = "block";
}
aboutBtn[2].onclick = function() {
  about.style.display = "block";
}

span[0].onclick = function() {
  about.style.display = "none";
}


var menu = document.getElementById("menu");
var btn = document.getElementsByClassName("menuBtn");

btn[0].onclick = function() {
  menu.style.display = "block";
}
btn[1].onclick = function() {
  menu.style.display = "block";
}
btn[2].onclick = function() {
  menu.style.display = "block";
}

span[1].onclick = function() {
  menu.style.display = "none";
}


var schedule = document.getElementById("schedule");
var scheduleBtn = document.getElementsByClassName("scheduleBtn");

scheduleBtn[0].onclick = function() {
  schedule.style.display = "block";
}
scheduleBtn[1].onclick = function() {
  schedule.style.display = "block";
}
scheduleBtn[2].onclick = function() {
  schedule.style.display = "block";
}

span[2].onclick = function() {
  schedule.style.display = "none";
}


var contact = document.getElementById("contact");
var contactBtn = document.getElementsByClassName("contactBtn");

contactBtn[0].onclick = function() {
  contact.style.display = "block";
}
contactBtn[1].onclick = function() {
  contact.style.display = "block";
}
contactBtn[2].onclick = function() {
  contact.style.display = "block";
}

span[3].onclick = function() {
  contact.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == contact) {
    contact.style.display = "none";
  }
  
  if (event.target == schedule) {
    schedule.style.display = "none";
  }

  if (event.target == menu) {
    menu.style.display = "none";
  }

  if (event.target == about) {
    about.style.display = "none";
  }
}