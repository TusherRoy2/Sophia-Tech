$(document).ready(function (){
    'use strict'

    // CODE START

    
    $('header nav .menu ul li a').click(function (){
        $('header nav .menu ul li a').removeClass('active')
        $(this).addClass('active')
    });
    

    $('.menu-icon .fa-bars').click(function (){
        $('header nav .menu').show(500)
        $(this).hide(200)
        $('.menu-icon .fa-times').show(200)
    });

    $('.menu-icon .fa-times').click(function (){
        $('.menu-icon .fa-bars').show(200)
        $('header nav .menu').hide(500)
        $(this).hide(200)
    });

    $(window).resize(function (){

        let screenSize = $(window).width()
        if (screenSize > 991){
            $('header nav .menu').removeAttr('style')
        }
        $('.menu-icon .fa-times').hide()
        $('.menu-icon .fa-bars').show()
        
    });

    
        
    $('.howThree .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

        
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            800:{
                items:2
            },
            1000:{
                items:3
            },
            1300:{
                items:4
            }
        }
    })

    





})

    // JAVASCRIPT

    var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();