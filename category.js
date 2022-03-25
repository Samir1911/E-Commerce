m=[
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
        id:"30",
        span:1599,
        p:"RUNNING ADI TREND SHOES"
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
        id:"60",
        span:4999,
        p:"GALAXY SHOES"
    },
    {
        id:"70",
        span:1299,
        p:"NOVARUN M"
    },
    {
        id:"80",
        span:2499,
        p:"REY SHOES"
    },
    {
        id:"90",
        span:3959,
        p:"GRAND COURT SE SHOES"
    },
    {
        id:"100",
        span:2340,
        p:"SPRI RUN SHOES"
    }
]
w=[
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
    {
        id:"220",
        span:4000,
        p:"DURAMO SL SHOES"
    },
    {
        id:"230",
        span:2050,
        p:"SUPERNOVA + SHOES"
    },
    {
        id:"240",
        span:3200,
        p:"EDGE LUX SHOES"
    },
    {
        id:"250",
        span:1999,
        p:"EQ21 RUN SHOES"
    },
    {
        id:"260",
        span:1599,
        p:"GALAXY SHOES"
    },
    {
        id:"270",
        span:2699,
        p:"ULTRA BOOST WEB DNA SHOES"
    },
    {
        id:"280",
        span:2300,
        p:"SPIKES SHOES"
    },
    {
        id:"290",
        span:1699,
        p:"ADI EASE W"
    }
]
k=[
    {
        id:"300",
        span:3999,
        p:"ZX 2K BOOST MARVEL SHOES"
    },
    {
        id:"310",
        span:2240,
        p:"NEMEZIZ MESSI.3 FIRM GROUND"
    },
    {
        id:"320",
        span:2520,
        p:"PREDATOR FREAK"
    },
    {
        id:"330",
        span:2000,
        p:"LITE RACER CLN 2.0"
    },
    {
        id:"340",
        span:1000,
        p:"this is shoe name"
    },
    {
        id:"350",
        span:1600,
        p:"COPA SENSE.4 FLEXIBLE GROUNG "
    },
    {
        id:"360",
        span:1500,
        p:"GHOSTED.3 TURF "
    },
    {
        id:"370",
        span:1000,
        p:"GHOSTED .3 FRIM GROUND"
    },
    {
        id:"380",
        span:2400,
        p:"NEBULA TED SHOES"
    },
    {
        id:"390",
        span:2599,
        p:"MARVEL SPIDER MAN BOA FORTARUN SHOES"
    }
]
var cls=localStorage.class;
if(cls=="men"){
    a=m;
}
else if(cls=="women"){
    a=w;
}
else{
    a=k
}
var main=document.querySelector("main");
s=""
a.forEach(li=>{
    sr="images/"+li.id+".webp"
    wisrc="images/wish1.png";
    al='0';
    if(localStorage.wishlist!=undefined){
        if(localStorage.wishlist.split(",").indexOf(li.id)>=0){
            wisrc="images/wish2.png"
            al='1';
        }
        else{
            wisrc="images/wish1.png"
            al='0'
        }
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
main.innerHTML=s;
var shoes=document.querySelectorAll(".product");
shoes.forEach(shoe=>{
    shoe.addEventListener("click",function(){
        localStorage.id=shoe.id;
        x=parseInt(shoe.id)
        if(cls=="men"){
           x=x/10-1;
        }
        else if(cls=="women"){
           x=x/10-20;
        }
        else{
           x=x/10-30;
        }
        localStorage.price=a[x].span;
        localStorage.name=a[x].p;
    })
})