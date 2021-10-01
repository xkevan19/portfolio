(function($) {

    "use strict";

    // COLOR MODE
    $('.color-mode').click(function() {
        $('.color-mode-icon').toggleClass('active')
        $('body').toggleClass('dark-mode')
    })

    // HEADER
    $(".navbar").headroom();

    // PROJECT CAROUSEL
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true
    });

    // SMOOTHSCROLL
    $(function() {
        $('.nav-link, .custom-btn-link').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 500);
            event.preventDefault();
        });
    });

    var $filters = $('.filter [data-filter]'),
        $boxes = $('.boxes [data-category]');

    $filters.on('click', function(e) {
        e.preventDefault();
        var $this = $(this);

        $filters.removeClass('active');
        $this.addClass('active');

        var $filterColor = $this.attr('data-filter');

        if ($filterColor == 'all') {
            $boxes.removeClass('is-animated')
                .fadeOut().finish().promise().done(function() {
                    $boxes.each(function(i) {
                        $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
                    });
                });
        } else {
            $boxes.removeClass('is-animated')
                .fadeOut().finish().promise().done(function() {
                    $boxes.filter('[data-category = "' + $filterColor + '"]').each(function(i) {
                        $(this).addClass('is-animated').delay((i++) * 200).fadeIn();
                    });
                });
        }
    });

    // TOOLTIP
    $('.social-links a').tooltip();

})(jQuery);