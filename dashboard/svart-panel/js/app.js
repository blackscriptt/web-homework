$('document').ready(function() {

    $('.slider .arrow.prev').click(function() {
        $('.slider-inner').find('.active').prev().addClass('active');
        $('.slider-inner').find('.active').next().removeClass('active');
    });

    $('.slider .arrow.next').click(function() {
        $('.slider-inner').find('.active').next().addClass('active');
        $('.slider-inner').find('.active').prev().removeClass('active');
    });

});