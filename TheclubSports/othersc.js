
const thenav=document.querySelector(".thenav");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY){
        thenav.classList.add("nav--hidden");
    }
    else {
        thenav.classList.remove("nav--hidden");
    }
    lastScrollY = window.scrollY;
});


