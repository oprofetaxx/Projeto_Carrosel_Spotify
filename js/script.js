$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('navbar-solid');
        } else {
            $('.navbar').removeClass('navbar-solid');
        }
    });
});