
//Scroll Animation for About
$(function() {
    //caches a jQuery object containing the header element
    var animate = $("#progress");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 825) {
            animate.removeClass('display-none').addClass("display");
        }
    });
});


//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
      console.log('page scroll', event);
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
