$(document).ready(function () {

    function mycarousel_initCallback(carousel) {
        $('.next').bind('click', function () {
            carousel.next();
            return false;
        });
        $('.prev').bind('click', function () {
            carousel.prev();
            return false;
        });

        // Disable autoscrolling if the user clicks the prev or next button.
        carousel.buttonNext.bind('click', function () {
            carousel.startAuto(0);
        });

        carousel.buttonPrev.bind('click', function () {
            carousel.startAuto(0);
        });

        // Pause autoscrolling if the user moves with the cursor over the clip.
        carousel.clip.hover(function () {
            carousel.stopAuto();
        }, function () {
            carousel.startAuto();
        });

    };

    $('#carousel').jcarousel({
        scroll: 1,
        wrap: 'last',
        initCallback: mycarousel_initCallback,
        // This tells jCarousel NOT to autobuild prev/next buttons
        buttonNextHTML: null,
        buttonPrevHTML: null
    });

});