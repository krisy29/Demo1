$(document).ready(function() {
    mobileNav()
});

function mobileNav() {
    $('.btn-mob-nav').click(function() {
        $('nav ul').toggleClass('mob-nav');
    });
}