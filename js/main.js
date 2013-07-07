
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
