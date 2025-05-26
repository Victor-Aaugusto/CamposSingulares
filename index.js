const menuHamburger = document.getElementById("nav-hamburguer");
const btnMenuHamburguer = document.getElementById("img-menu-hamburguer");
const menuHamburgerPc = document.getElementById("navBarPc")
const menuHamburgerActive = document.getElementById("menu-hamburguer")
let scrollPos = 0;

btnMenuHamburguer.addEventListener("click", () => {
    if (menuHamburger.classList.contains("nav-hamburguer")) {
        menuHamburger.classList.remove("nav-hamburguer");
        menuHamburger.classList.add("nav-hamburguer-active");
        menuHamburgerActive.classList.add("menu-hamburguer-active")
        
    } else {
        menuHamburger.classList.remove("nav-hamburguer-active");
        menuHamburgerActive.classList.remove("menu-hamburguer-active")
        menuHamburger.classList.add("nav-hamburguer");
    }
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

