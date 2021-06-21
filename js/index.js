const NavbarContent = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content");
const navbarToggleIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-nav-toggle-btn");
const navbarCloserIcon = document.querySelector(".hnazmul-navbar .hnazmul-navbar-container .hnazmul-navbar-content .hnazmul-navbar-content-wrapper button.navbar-closer-icon");

navbarToggleIcon.addEventListener("click", ()=> {
    NavbarContent.classList.toggle("navbar-show");
})
navbarCloserIcon.addEventListener("click", ()=> {
    
    NavbarContent.classList.toggle("navbar-show")
})