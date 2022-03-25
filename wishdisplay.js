var wished=localStorage.wish.split(",");
var main=document.querySelector("main");

var str="";
wished.forEach(wis=>{
    str+=`<div class="container">`+wis+`</div>`;
})
main.innerHTML=str;

var wish=document.querySelectorAll(".wish");
wish.forEach(wi=>{
    wi.src="images/wish2.png";
    wi.alt='1';
})
