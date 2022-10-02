
const beforeTop = '-30px';
const boforeZIndex = -1;
const afterTop = '101px';
const afterZIndex = 1;


let menuOn = true;

const clickMenuBar = () => {
  
  const mobileUl = document.querySelector(".mobileUl");
  

  
  menuOn ? mobileUl.style.top = afterTop : mobileUl.style.top = beforeTop;
  menuOn ? mobileUl.style.zIndex = afterZIndex : mobileUl.style.zIndex = boforeZIndex;
  menuOn ? mobileUl.style.opacity = 1 : mobileUl.style.opacity = 0;
  
  menuOn = !menuOn;
};


export {clickMenuBar};