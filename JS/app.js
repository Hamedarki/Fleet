const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".item-hide");

bar.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
});