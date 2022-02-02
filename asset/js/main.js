$(document).ready(function(){
    $(".burger").click(function(){
        $(".c-menu").toggleClass("show");
        $(this).toggleClass("active");
    });
});