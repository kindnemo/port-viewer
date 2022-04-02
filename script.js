const height = document.querySelector(".height");
const width = document.querySelector(".width");
const dpr = document.querySelector(".dpi");

dpr.textContent = `DPR: ${window.devicePixelRatio}`;

function display(){
    height.textContent = window.innerHeight + 'px';
    width.textContent = window.innerWidth + 'px';
}
window.onload = display;
window.addEventListener("resize", display);