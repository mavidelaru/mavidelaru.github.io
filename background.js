var angle = 0 


ScrollReveal().reveal('.section_title', { delay: 400 });
ScrollReveal().reveal('.case1', { delay: 300 });
ScrollReveal().reveal('.case2', { delay: 500 });
ScrollReveal().reveal('.case3', { delay: 600 });
ScrollReveal().reveal('.case4', { delay: 700 });
ScrollReveal().reveal('.case5', { delay: 900 });
ScrollReveal().reveal('.case6', { delay: 1000 });


var changeBackground = function () {
    angle = angle + 1;

   document.getElementById("intro").style.backgroundImage= "linear-gradient("+ angle +"deg, #473C9D, #27114D)"

   document.getElementById("footer-aboutme").style.backgroundImage= "linear-gradient("+ angle +"deg, #473C9D, #27114D)"

    requestAnimationFrame(changeBackground);
    
}

changeBackground();



