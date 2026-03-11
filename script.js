const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(btn => {

btn.addEventListener("mouseover",()=>{

btn.style.transform="scale(1.05)";

})

btn.addEventListener("mouseout",()=>{

btn.style.transform="scale(1)";

})

})
