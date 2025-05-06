const menuHamburger = document.getElementById("nav-hamburguer");
const btnMenuHamburguer = document.getElementById("img-menu-hamburguer");

btnMenuHamburguer.addEventListener("click", () => {
    if (menuHamburger.classList.contains("nav-hamburguer")) {
        menuHamburger.classList.remove("nav-hamburguer");
        menuHamburger.classList.add("nav-hamburguer-active");
    } else {
        menuHamburger.classList.remove("nav-hamburguer-active");
        menuHamburger.classList.add("nav-hamburguer");
    }
});


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
