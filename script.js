const cards = ["js", "php", "html", "css", "mysql", "sqlite", "figma", "git", "test", "test", "test", "test","test", "test", "test", "test","test", "test", "test", "test","test", "test", "test", "test","test", "test", "test", "test","test", "test", "test", "test","test", "test", "test", "test","test", "test", "test", "test","test", "test", "test","test", "test","test", "test", "test", "test","test", "test", "test",];

// Display SideBar

const sidebarBtn = document.querySelector(".sidebar-button");
const aside = document.querySelector(".sideBar");

sidebarBtn.addEventListener("click", function() {
    aside.classList.add("open");
})

aside.addEventListener("click", function() {
    aside.classList.remove("open");
})

// Display Modal

const modalBtn = document.querySelector(".overlay-button");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-button");

modalBtn.addEventListener("click", function() {
    overlay.style.display = "flex";
})

closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
})

// Display Cards

const displayArray = document.querySelector(".display-array");
const ulElement = document.querySelector("ul");

cards.forEach((card) => {
    const liElement = document.createElement("li");
    liElement.innerText = card;
    ulElement.appendChild(liElement);
});

cards.forEach(cards => console.log(cards))


//Scroll

const header = document.querySelector("header");

const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function() {
    header.scrollIntoView({
        behavior: "smooth"
    })
})

//Apparition du scroll Button

let iScrollPos = 0;
window.scroll(function() {
    let iCurscrollPos = this.scrollTop();

    if (iCurscrollPos > iScrollPos) {
        scrollToTopBtn.classList.remove("show")
    } else {
        scrollToTopBtn.classListe.add("show");
    }
})
