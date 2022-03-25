if(localStorage.i=='1'){
    b=localStorage.wish.split(",");
    ids=localStorage.wishlist.split(",");
}
else{
    b=[];ids=[];
}
var wish=document.querySelectorAll(".wish");
wish.forEach(wi=>{
    wi.addEventListener("click",function(){
        w=wi.parentElement.parentElement.innerHTML;
        if(wi.alt=='0'){
            wi.src="images/wish2.png";
            wi.alt='1';
            b.push(w);
            ids.push(wi.classList[1]);
            localStorage.i='1';
        }
        else{
            wi.src="images/wish1.png";
            wi.alt='0';
            if(b.indexOf(w)==(b.length-1)){
                b.pop();
                ids.pop();
            }
            else{
                console.log(b.indexOf(w));
                b[ids.indexOf(wi.classList[1])]=b.pop();
                ids[ids.indexOf(wi.classList[1])]=ids.pop();
            }
        }
        localStorage.wish=b;
        localStorage.wishlist=ids;
    })
})



