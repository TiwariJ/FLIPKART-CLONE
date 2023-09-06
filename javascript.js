
let image=document.querySelector(Slider_image);
let translate=0;
setInterval(()=>{
    if(translate>=0&&translate<500){
        translate+=100
    }
    else{
        translate=0
    }
    console.log("hii")
    image.style.transform='translateX(${-translate}%)'
},1000)


    