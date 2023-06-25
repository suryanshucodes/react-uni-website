function togglehide() {
  let content = document.getElementById("toggle-content");
  if (content.style.display != "none") {
    content.style.display = "none";
    document.getElementById('btn').innerHTML = "Show more";
  }
  else {
    content.style.display = "block";
    document.getElementById('btn').innerHTML = "Show less";
  }
}
function displayTime(){
    time = new Date();
    document.getElementById('time-div').innerHTML = time;
}
setInterval(displayTime, 1000);