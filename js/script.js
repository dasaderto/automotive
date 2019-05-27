//nav
let collapse = document.querySelector('.nav__list');
let menu = document.querySelector(".menu-icon");
let lines = menu.querySelectorAll(".line");
menu.addEventListener('click', function () {
    if (collapse.classList.contains("opened")) {
        collapse.classList.remove("opened");
        collapse.style.maxHeight = null;
        lines[0].style.width = "40px";
        lines[1].style.width = "20px";
        lines[2].style.width = "30px";
    } else {
        collapse.classList.add("opened");
        collapse.style.maxHeight = collapse.scrollHeight + "px";
        menu.children[0].style.width = "40px";
        menu.children[1].style.width = "40px";
        menu.children[2].style.width = "40px";
    }
});