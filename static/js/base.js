var block;
var showOrNot;
var imageblock;
showOrNot = true;


$('nav .sp').click(function () {
    block = '.sp_nav'
    imageblock = '.sp .arrow'
    showOrNot = hide(block, showOrNot)
});

$('nav .about_me').click(function () {
    block = '.about_me_nav'
    imageblock = '.about_me .arrow'
    showOrNot = hide(block, showOrNot)
});

$('nav .skills').click(function () {
    block = '.skills_nav'
    imageblock = '.skills .arrow'
    showOrNot = hide(block, showOrNot)
});

$('nav .back_end').click(function () {
    block = '.back_end_nav'
    imageblock = '.back_end .arrow'
    showOrNot = hide(block, showOrNot)
});

$('nav .front_end').click(function () {
    block = '.front_end_nav'
    imageblock = '.front_end .arrow'
    showOrNot = hide(block, showOrNot)
});

function hide(block, showOrNot) {
    if ($(window).width() <= '720') {
        return true
    }
    if (showOrNot) {
        $(block).css('display', 'block')
        $(imageblock).attr('src', 'static/image/arrow_down.png')
        return false
    }
    else {
        alert('lll')
        $(block).css('display', 'none')
        $(imageblock).attr('src', 'static/image/arrow_aside.png')
        return true
    }
};


$('a[href*=#]').bind("click", function(e){
var anchor = $(this);
$('html, body').stop().animate({
scrollTop: $(anchor.attr('href')).offset().top-32
}, 1000);
e.preventDefault();
});

// $(document).ready(function () {
//     $('.drop_menu ').bind("click", function () {
//         alert();
//         showOrNot = drop_menu(showOrNot);
//
//         function drop_menu(showOrNot) {
//             if (showOrNot) {
//                 $(' nav ').attr('style', 'display: block !important')
//                 return false
//             }
//             else {
//                 $(' nav ').attr('style', 'display: none !important')
//                 return true
//             }
//         }
//     });
// });
//
// function bly() {
//     $(' nav ').attr('style', 'display: block !important')
// }

if ($(window).width() < '768') {
    $(' #dm ').attr('style', 'display: block !important');
    $('.drop_menu, nav ').bind("click", function () {
        showOrNot = drop_menu(showOrNot);
        function drop_menu(showOrNot) {
            if (showOrNot) {
                $(' nav ').attr('style', 'display: block !important');
                return false
            }
            else {
                $(' nav ').attr('style', 'display: none !important');
                return true
            }
        }
    });
}
else {
    $(' #dm').attr('style', 'display: none !important');
    $(' nav ').attr('style', 'display: block !important');

}