const links = document.querySelectorAll('.menu-items li a')

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 140;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
/*------------------ Read more Scrolling position -------------------*/
$(document).ready(function () {
  if (window.location.hash.length > 0) {
    window.scrollTo(0, $(window.location.hash).offset().top);
  }
});