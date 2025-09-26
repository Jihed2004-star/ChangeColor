const btn=document.querySelector("#btn");
const bodyy=document.querySelector("body");
const spn=document.querySelector("#code");


const colors=[
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
]
function randomIndex(){
  return Math.floor(Math.random()*(colors.length));
}
function chnge(){
  bodyy.style.backgroundColor=colors[randomIndex()];
  spn.innerText=colors[randomIndex()];
}
function showSpan(){
  
}
btn.onclick=chnge;

