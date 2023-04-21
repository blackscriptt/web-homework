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


    let batterys = [
        "fa-battery-full",
        "fa-battery-three-quarters",
        "fa-battery-half",
        "fa-battery-quarter",
        "fa-battery-empty"
    ];
    let counter = 4;


    setInterval(() => {
        const date = new Date().toLocaleTimeString();
        let time = date.split(':');
        $('.clock').text(`${time[0]}.${time[1]}`);


        if(counter >= 0) {
            batterys.forEach(item => {
                $('.battery i').removeClass(item);
            });

            $('.battery i').addClass(batterys[counter]);
            counter--;
        } else {
            counter= 4;
        }
     }, 1000);
});
