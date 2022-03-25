var menu=document.querySelector("#menu");
var slide=document.querySelector("aside");
var close=document.querySelector("#close")
menu.addEventListener("click",function(){
    
    slide.style.marginLeft="-40px";
    slide.style.transition='2s';
    slide.style.display="flex";
})
close.addEventListener("click",function(){
    slide.style.marginLeft="150px";
    slide.style.transition='2s';
    slide.style.display="none";
})
var a=document.querySelectorAll("a");
a.forEach(li=>{
    li.addEventListener("click",function(){
        localStorage.class=li.className;
    });
})
