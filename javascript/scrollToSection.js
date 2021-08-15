const links = document.querySelectorAll('.menu-items li a')

for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
   
  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop-100;
   
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }