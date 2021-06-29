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
        strings: ["Developer", "Learner", "Reader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Learner", "Reader"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //owl carousel 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    $('.contact-form').submit((e) => {
        e.preventDefault(); //prevent submitting form
    });

    $('.send-msg').click(()=> {
        $fullname = $('.fullname').val();
        $email = $('.email-input').val();
        $subject = $('.subject').val();
        $message = $('.message').val();
        $('.send-msg').text("Sending...");
        $('.contact-form').addClass("disable");

        
    })
});