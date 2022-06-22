// Open Close Nav Bar 

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


// Scroll Container 

const rightArrow = document.querySelector('.go-right')
const leftArrow = document.querySelector('.go-left')
const scrollContainer = document.querySelector('.reviews-container');


rightArrow.addEventListener('click' , goRight)
leftArrow.addEventListener('click' , goLeft)


function goRight(){
    if(scrollContainer.scrollLeft!=(scrollContainer.scrollWidth-1005)){
        scrollContainer.scrollLeft+= (window.innerWidth );
        console.log(scrollContainer.scrollLeft , scrollContainer.scrollWidth-1005);
    }
}

function goLeft(){
    if(scrollContainer.scrollLeft!=0){
        scrollContainer.scrollLeft-= (window.innerWidth );
    }
}

// Change The Nav Link Color 

const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.nav-link')

window.onscroll = () => {
    let current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop ) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("current");
      if (li.href.includes(current)) {
        li.classList.add('current');
        }
    });
  };