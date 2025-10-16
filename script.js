const cards = ["js", "php", "html", "css", "mysql", "sqlite", "figma"];

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

let main = document.querySelector(".main")

cards.forEach((card) => {
    const cardsDiv = document.createElement("div");
    cardsDiv.classList.add("generate-cards");
    cardsDiv.innerText = card;
    main.appendChild(cardsDiv);
})

//Scroll

const header = document.querySelector("header");
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

scrollToTopBtn.addEventListener("click", function() {
    header.scrollIntoView({
        behavior: "smooth"
    })
})

//Apparition du scroll Button

window.addEventListener("scroll", function() {
    console.log("test");
    let position = this.window.scrollY;

    if(position > 100) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
})

// Mega Menu
let dropDownLink = document.querySelector(".drop-down-link");
let dropDownMenu = document.querySelector(".dropdown-menu");

dropDownLink.addEventListener("click", function() {
    dropDownMenu.classList.add("view");
})

dropDownMenu.addEventListener("click", function() {
    dropDownMenu.classList.remove("view");
})

// Search Bar

// const searchBar = document.querySelector(".search-bar");
// const searchcards = document.querySelector(".generate-cards");

// searchBar.addEventListener('keyup', (e) => {
//     const searchString = e.target.value.toLowerCase();
//     console.log(searchString);

//     let result = searchcards.find(searchString);
//     console.log(result);

//     cards.forEach((card) => {
//         console.log(card);
//     })
//     const filteredcard = cards.filter( card => {
//         return card.search(searchString);
//     })
//     console.log(filteredcard);
// })

// Context Menu

const mainContext = document.querySelector(".main")
mainContext.addEventListener("contextmenu", (e) => {
    {e.preventDefault()};

    const rightClickElement = document.getElementById("rightClickElement");
    const menuBox = document.getElementById("right-click-menu");
    rightClickElement.addEventListener("contextmenu", popMenu);
    document.body.addEventListener("click", onBodyClick);

    function onBodyClick() {
        hideMenu();
    }
    function hideMenu() {
        menuBox.style.display="none";
    }

    function popMenu(e) {
        menuBox.style.display = "block";
        menuBox.style.top = e.pageY + "px";
        menuBox.style.left = e.pageX + "px";
    }
   
})



