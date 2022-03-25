//----setting up the images and content for product
var thumb=document.querySelector("#thumbs");
i=localStorage.id;
s=[]
for(var j=0;j<8;j++){
    str="images/"+i/10+String(j)+".webp";
    s.push(str);
}
thumb.innerHTML=`
            <img class="Mimg" src=${s[0]} alt="Product image">
            <div class="thumb">
                <img src=${s[0]} alt="thumb-nail1">
                <img src=${s[1]} alt="thumb-nail2">
                <img src=${s[2]} alt="thumb-nail3">
                <img src=${s[3]} alt="thumb-nail4">
            </div>
            <div id="colors">
                <p>Colors Available : </p>
                <img src=${s[0]} alt="variants">
                <img src=${s[4]} alt="variants">
            </div>
            `
var price=document.querySelector("#cost");
p=parseInt(localStorage.price);
op=p+p/5;
price.innerHTML=`<p>${p}.00</p>
                    <p>${op}</p>`

var nam=document.querySelector("#name");
nam.innerText=localStorage.name;

//thumbnails and image 
var tbnails=document.querySelectorAll(".thumb img");
var mimg=document.querySelector(".Mimg");
tbnails.forEach(tb=>{
    tb.addEventListener("click",function(){
        mimg.src=tb.src;
    })
})
//color variants
var colors=document.querySelectorAll("#colors img");
colors.forEach(col=>{
    col.addEventListener("click",function(){
        let a=0,b=1,c=2,d=3;
        if (col===colors[1]){
            a=4;b=5;c=6;d=7;
        }
        mimg.src=tbnails[0].src=s[a];
        tbnails[1].src=s[b];
        tbnails[2].src=s[c];
        tbnails[3].src=s[d];
    })
})

//--------increasing Quantity-----------
var plus=document.querySelector("#plus");
var minus=document.querySelector("#minus");
var quan=document.querySelector("#selected");
var q=0;
plus.addEventListener("click",function(){
    quan.innerText=++q;
})
minus.addEventListener("click",function(){
    if(q!=0){
        quan.innerText=--q;
    }
})
