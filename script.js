$(document).ready(function(){
    $(window).scroll(function(){
        //sticky navbar 
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        //Scroll-up button
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //remove smooth scroll
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //smooth scroll
        $('html').css("scrollBehavior", "smooth");
    });

    //toggle menu/navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Youtuber", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = newTyped(".typing-2", {
        strings: ["Youtuber", "Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
})