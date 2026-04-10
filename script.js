function loadPage(p){
document.getElementById("frame").src=p;
}

var names=["Arjun","Meera","Rahul","Sneha"];
var skills=["Frontend","Backend","AI","Fullstack"];

var html="";
for(var i=0;i<names.length;i++){
html+="<div class='card' onclick='openDev("+i+")'><b>"+names[i]+"</b><br>"+skills[i]+"</div>";
}
document.getElementById("devList").innerHTML=html;

function openDev(i){
localStorage.setItem("dev",i);
document.getElementById("frame").src="developer.html";
}