$(document).ready(function() {

    const phoneDark = $('.phone__dark');
    $('.phone__power').on('click', function() {

        if(phoneDark.css('opacity') == '1') { 
            phoneDark.animate({ opacity: '1' })
            .delay(100)
            .animate({ opacity: '0' }, function() {
                $(this).css({ display: 'none' })
            });

         } else {
            phoneDark.animate({ opacity: '0' }, function() {
                $(this).css({ display: 'block' })
            })
            .delay(100)
            .animate({ opacity: '1' });
         }
        
    });

});