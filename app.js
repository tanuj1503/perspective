const container = document.querySelector(".main-container");
const card = document.querySelector(".container");
const image = document.querySelector(".img img");
const sizesP = document.querySelector(".sizes"); 
const buttons = document.querySelector(".btns"); 

container.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth/2 - e.pageX) /25;
    const yAxis = (window.innerHeight/2 - e.pageY) /25;
    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

// animate in
container.addEventListener('mouseenter', (e) => {
card.style.transition = "none";
image.style.transform = "translateZ(120px)";
sizesP.style.transform = "translateZ(90px)";
buttons.style.transform = "translateZ(100px)";
})

// animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateX(${0}deg) rotateY(${0}deg)`;
    card.style.transition = "all 0.2s ease-out";
    image.style.transform = "translateZ(0px)";
    sizesP.style.transform = "translateZ(0px)";
    buttons.style.transform = "translateZ(0px)";
})