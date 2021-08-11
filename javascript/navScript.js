const nav = document.getElementById("nav");
const body = document.getElementsByTagName("body")[0];
const styleNav = () => {
  if ((nav.style.background === "white")) {
    return;
  }
  nav.style.background = "white";
  nav.style.boxShadow = "0px 5px 20px -15px rgba(0,0,0,0.75)";
};

window.addEventListener("scroll", styleNav);
