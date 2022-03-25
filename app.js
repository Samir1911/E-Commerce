na=[
    {
        id:"10",
        span:1000,
        p:"TURBO GLIDE M"
    },
    {
        id:"20",
        span:1099,
        p:"ULTRA BOOST WEB DNA SHOES"
    },
    {
        id:"200",
        span:1099,
        p:"LITE RACER SHOES"
    },
    {
        id:"210",
        span:1889,
        p:"ADI CHIC SHOES"
    },  
]
popular=[
    {
        id:"260",
        span:1599,
        p:"GALAXY SHOES"
    },
    {
        id:"40",
        span:1010,
        p:"ULTIMASH SHOES"
    },
    {
        id:"50",
        span:1999,
        p:"AMAZ RUNNER M"
    },
    {
        id:"360",
        span:1500,
        p:"GHOSTED.3 TURF "
    }
]

var newa=document.querySelector("#new");
s="";var al='0';
na.forEach(li=>{
    sr="images/"+li.id+".webp"
    if(localStorage.wishlist!=undefined){
        if(localStorage.wishlist.split(",").indexOf(li.id)>=0){
            wisrc="images/wish2.png";
            al='1';
        }
        else{
            wisrc="images/wish1.png";
            al='0';
        }
    }    
    else{
        wisrc="images/wish1.png";
    }
   s+=`<div class="container">
            <a href="product.html"><img class="product" id=${li.id} src=${sr} alt="image"></a>
            <div>
                <p>price: <span>${li.span}</span></p>
                <img class="wish ${li.id}" src=${wisrc} alt=${al}>
            </div>
            <p class="shoe">${li.p}</p>
        </div>
        `
})
newa.innerHTML=`<legend>New Arrivals</legend>
                ${s}`;
var pl=document.querySelector("#popular");
s="";
popular.forEach(li=>{
    sr="images/"+li.id+".webp";
    if(localStorage.wishlist!=undefined){
        if(localStorage.wishlist.split(",").indexOf(li.id)>=0){
            wisrc="images/wish2.png";
            al='1';
        }
        else{
            wisrc="images/wish1.png";
            al='0';
        }
    }    
    else{
        wisrc="images/wish1.png";
    }
   s+=`<div class="container">
            <a href="product.html"><img class="product" id=${li.id} src=${sr} alt="image"></a>
            <div>
                <p>price: <span>${li.span}</span></p>
                <img class="wish ${li.id}" src=${wisrc} alt=${al}>
            </div>
            <p class="shoe">${li.p}</p>
        </div>
        `
})
pl.innerHTML=`<legend>Popular</legend>
                ${s}`;

var img=document.querySelectorAll(".product")
img.forEach(im=>{
    im.addEventListener("click",function(){
        localStorage.id=im.id;
        localStorage.price=im.parentElement.nextElementSibling.firstElementChild.firstElementChild.innerHTML;
        localStorage.name=im.parentElement.nextElementSibling.nextElementSibling.innerHTML;
    })
})

