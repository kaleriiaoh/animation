
document.addEventListener('DOMContentLoaded', function () {
    var x = document.getElementById("myAudio");
    var y = document.querySelector('header');

    y.addEventListener('mouseenter', function () {
        x.play();
    })

    y.addEventListener('mouseleave', function () {
        x.pause();
    })
});

$(window).on('load', function () {
    $('.preloader_content').delay(500).fadeToggle(500);
});


