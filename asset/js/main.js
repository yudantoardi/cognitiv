$(document).ready(function(){
    $(".burger").click(function(){
        $(".c-menu").toggleClass("show");
        $(this).toggleClass("active");
    });

    $(".bt-src").click(function(){
        $(".src-overlay").addClass("show");
    });

    var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
        $('.bt-src').on(supportsTouch ? 'touchend' : 'click', function (event) {
            event.stopPropagation();
            $('.src-overlay').addClass("show");
            $(".master").addClass("blur");
        });
        $('.src').on(supportsTouch ? 'touchend' : 'click', function (ev) {
            ev.stopPropagation();
        });

        $(document).on(supportsTouch ? 'touchend' : 'click', function (event) {
            $('.src-overlay').removeClass("show");
            $(".master").removeClass("blur");
        });
});