$(function () {
    const header = document.querySelector('header');

    function onScroll(){
        if (window.pageYOffset>50){
            header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    }

    window.onscroll = ()=> onScroll();


});