(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate WOW.js — disable on very small screens to prevent overflow jank
    var wow = new WOW({
        mobile: false   // do not animate on phones (< 768px) to avoid slideIn overflow
    });
    wow.init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-200px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Hero carousel
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });


    // Close mobile navbar when a nav link is tapped
    // (Bootstrap 5 doesn't do this automatically)
    $(document).on('click', '.navbar-collapse .nav-link', function () {
        var $collapse = $('.navbar-collapse');
        if ($collapse.hasClass('show')) {
            $collapse.collapse('hide');
        }
    });


    // Lightbox options
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            resizeDuration: 200,
            wrapAround: true,
            albumLabel: 'Photo %1 of %2'
        });
    }

})(jQuery);
