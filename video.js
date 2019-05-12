var $videojs = $('.videojs');

$videojs.on('mouseenter', function () {
    $videojs.get(0).play();
});

$videojs.on('mouseleave', function () {
    $videojs.get(0).pause();
});


var $videojs2 = $('.videojs2');

$videojs2.on('mouseenter', function () {
    $videojs2.get(0).play();
});

$videojs2.on('mouseleave', function () {
    $videojs2.get(0).pause();
});

