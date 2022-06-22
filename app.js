const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list')
const shLine = document.querySelector('.sh-line');
const lgLine1 = document.querySelector('.lg-line1');
const lgLine2 = document.querySelector('.lg-line2');

hamburger.addEventListener('click' , openCloseNavBar )

function openCloseNavBar(){
    hamburger.classList.toggle('close');

    shLine.classList.toggle('opened')
    lgLine1.classList.toggle('opened')
    lgLine2.classList.toggle('opened')
    if(!hamburger.classList.contains('close')){
        navList.style.right = '0px'
    }else{
        if(window.innerWidth<=650)
            navList.style.right= '-100vw'
        else
            navList.style.right= '-50vw'

    }
}