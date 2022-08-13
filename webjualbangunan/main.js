(function($){
    "use strict";

    // header-carousel

    $(".header-carousel").owlCarousel(
        {
        autoplay:true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText:  [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]

        });
})(jQuery);