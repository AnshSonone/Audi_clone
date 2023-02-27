const ouritemdiv = document.getElementsByClassName('item');
const hidden_box = document.getElementsByClassName('hidden_box');
const openIcons = document.getElementsByClassName('open_icon');
const clsoeIcon = document.getElementsByClassName('close_icon');
const hamburger = document.querySelector('.hamburger');
const slide_bar = document.querySelector('.slide_bar');
const right_arrow = document.querySelector('.right_arrow');
const slider_2 = document.querySelector('.slider_2');
const head_menu =document.querySelector('.head-menu');
const left_arrow = document.querySelector('.left_arrow');

right_arrow.addEventListener('click', ()=>{
    slider_2.classList.toggle('put')
})
left_arrow.addEventListener('click', ()=>{
    slider_2.classList.toggle('put')
})



hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('change')
    slide_bar.classList.toggle('apply')
});

for (let i=0; i < ouritemdiv.length; i++ ){

    clsoeIcon[i].style.display = 'none'

    ouritemdiv[i].addEventListener('click', ()=>{
       const result = hidden_box[i].classList.toggle('active')

       if (result){
        clsoeIcon[i].style.display = 'block'
        openIcons[i].style.display = "none"
       }else {
        clsoeIcon[i].style.display = 'none'
        openIcons[i].style.display = "block"
       }
    })

}