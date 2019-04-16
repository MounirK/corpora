jQuery(document).ready(function () {
    "use strict"

    /*water effect*/
    $('.slider').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.05,
    });


    /*text animation effect*/
    var typed = new Typed('.text', {
        strings: ["<strong>Hey I'm</strong><strong class='primary'> Mounir</strong>",
            "<strong>I'm a </strong><strong class='primary'>Web Developer</strong>",
            "<strong class='primary'>Ux/ui designer</strong>"
        ],

        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });


    /*sticky navigation effect*/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 60) {

            $('nav').addClass('secondary');

        } else if ($('nav').hasClass('secondary')) {

            $('nav').removeClass('secondary');

        }
    });


    /*sticky navigation effect*/
    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }

    });

    /*Owl carousel*/

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            },

            768: {
                items: 3
            }
        }
    });

    /*Counter Up*/
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    /*smooth scroll*/

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, "easeInOutExpo");
    });

    /*woow animation*/
    new WOW().init();


});