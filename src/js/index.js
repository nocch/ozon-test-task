$(function() {
    $(window).scroll(function() {
        animateText();
        
    });

});

function animateText() {
    $('h1').each(function(){
        var elem = $(this);
            if ((elem.offset().top-$(window).height()*0.7) < $(window).scrollTop()) {
                elem.addClass('animated');
            } else {
                elem.removeClass('animated');
            }
    });
}