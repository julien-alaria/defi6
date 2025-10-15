const sidebarBtn = document.querySelector(".sidebar-button");
const aside = document.querySelector("aside");

sidebarBtn.addEventListener("click", function() {
    aside.classList.add("open");

})

aside.addEventListener("click", function() {
    aside.classList.remove("open");
})