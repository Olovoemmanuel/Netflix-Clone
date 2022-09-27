const faq1 = document.querySelector('.faq1');
const faq2 = document.querySelector('.faq2');
const faq3 = document.querySelector('.faq3');
const faq4 = document.querySelector('.faq4');
const faq5 = document.querySelector('.faq5');

const submenu1 = document.querySelector('.submenu1');
const submenu2 = document.querySelector('.submenu2');
const submenu3 = document.querySelector('.submenu3');
const submenu4 = document.querySelector('.submenu4');
const submenu5 = document.querySelector('.submenu5');

const svgRotate = document.querySelector('.icon_svg');
const svgRotate1 = document.querySelector('.icon_svg2');
const svgRotate2 = document.querySelector('.icon_svg3');
const svgRotate3 = document.querySelector('.icon_svg4');
const svgRotate4 = document.querySelector('.icon_svg5');

function faqToggle(submenu){
    submenu.classList.toggle('open')
}

function rotateIconSvg(rotate){
    rotate.classList.toggle('rotate_icon')
}




faq1.addEventListener('click', (e)=>{
    faqToggle(submenu1)
    rotateIconSvg(svgRotate)
})

faq2.addEventListener('click', ()=>{
    faqToggle(submenu2)
    rotateIconSvg(svgRotate1)
    
})

faq3.addEventListener('click', ()=>{
    faqToggle(submenu3)
    rotateIconSvg(svgRotate2)
})

faq4.addEventListener('click', ()=>{
    faqToggle(submenu4)
    rotateIconSvg(svgRotate3)
})

faq5.addEventListener('click', ()=>{
    faqToggle(submenu5)
    rotateIconSvg(svgRotate4)
})




