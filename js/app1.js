// const endDate =document.getElementById("end-time").innerText;
// console.log(endDate);
const inputs = document.querySelectorAll("input");
let endDate;
let input;
let startDate;
let input1;

document.getElementById("end-time").addEventListener("change", function () {
  input = this.value;
  endDate = new Date(input);
});
document.getElementById("start-time").addEventListener("change", function () {
  input1 = this.value;
  startDate = new Date(input1);
});

const clock = () => {
  const end = new Date(endDate)
  const now = new Date();
  const difference = (end - now) / 1000;
  if (difference < 0) return;
  // console.log("now", now);
  // console.log("end", end);
  // console.log(difference);
  
  inputs[2].value = Math.floor(parseInt(difference / 3600 / 24));
  inputs[3].value = Math.floor((difference / 3600) % 24);
  inputs[4].value = Math.floor((difference / 60) % 60);
  inputs[5].value = Math.floor(difference % 60);
  //convert into days
};
document.getElementById("btn").addEventListener("click", clock());

// clock();
/*
1 days=24
1 hr=60min
60 min=3600 sec
*/
setInterval(() => {
  clock();
}, 1000);
//end