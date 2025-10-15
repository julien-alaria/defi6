const cards = ["js", "php", "html", "css", "mysql", "sqlite", "figma", "git"];
const sidebarBtn = document.querySelector(".sidebar-button");
const aside = document.querySelector("aside");
const modalBtn = document.querySelector(".overlay-button");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-button");
const displayArray = document.querySelector(".display-array");
const ulElement = document.querySelector("ul");


sidebarBtn.addEventListener("click", function() {
    aside.classList.add("open");
})

aside.addEventListener("click", function() {
    aside.classList.remove("open");
})

modalBtn.addEventListener("click", function() {
    overlay.style.display = "flex";
})

closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
})

cards.forEach((card) => {
    const liElement = document.createElement("li");
    liElement.innerText = card;
    ulElement.appendChild(liElement);
});

cards.forEach(cards => console.log(cards))