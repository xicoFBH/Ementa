let today = new Date();
let dayWeek = today.getDay();
let weekNumber = today.getWeek();

if(weekNumber % 2 == 0){
  let x = document.getElementsByClassName("p"+dayWeek);
  x[0].style.background = "green";
  x[1].style.background = "green";
  x[2].style.background = "green";
  x[3].style.background = "green";
}
else{
  let x = document.getElementsByClassName("i"+dayWeek);
  x[0].style.background = "green";
  x[1].style.background = "green";
  x[2].style.background = "green";
  x[3].style.background = "green";
}