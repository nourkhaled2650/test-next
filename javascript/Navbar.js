/*------------------ Navbar-scrolling style ---------------*/
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})
/*-------------------- Scrolling ------------------*/
/*Scroll transition to anchor*/
$("a.toscroll").on('click', function (e) {
    var url = e.target.href;
    var hash = url.substring(url.indexOf("#") + 1);
    $('html, body').animate({
        scrollTop: $('#' + hash).offset().top - 110
    }, 900);
    return false;
});