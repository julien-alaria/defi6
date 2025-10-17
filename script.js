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

// Random

const randomBtn = document.querySelector(".random-button");

randomBtn.addEventListener("click", function() {
    const randomCards = cards.sort(function () {
        return Math.random() - 0.5;
    })
    cardsContainer.innerHTML = "";
    randomCards.forEach((randomCard) => {
        const cardGenerate = document.createElement("div");
        cardGenerate.classList.add("generate-cards");
        cardGenerate.innerText = randomCard;
        cardGenerate.appendChild(cardGenerate);
    })
})

// Sort

const leftAside = document.querySelector(".left-aside");
const sortBtn = document.querySelector(".sort-button");

sortBtn.addEventListener("click", function() {
    let sortCards = cards.sort();

    sortCards.forEach((sortCard) => {
        const cardGenerate = document.createElement("div");
        cardGenerate.classList.add("random-cards");
        cardGenerate.innerText = sortCard;
        leftAside.appendChild(cardGenerate);
        leftAside.style.display = "flex";
    })
    
    sortBtn.addEventListener("click", function() {
        if (leftAside.style.display === "flex") {
            leftAside.style.display = "none";
        } else {
            leftAside.style.display = "flex";
        }
    })

    leftAside.addEventListener("click", onSortedClick);

    function onSortedClick() {
        leftAside.style.display = "none";
    }
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

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", function(e) {
    const query = e.target.value;
    const cardElements = document.querySelectorAll(".generate-cards");
    console.log(query);

    cardElements.forEach((cardElement) => {
        const cardText = cardElement.innerText;
        if (cardText.includes(query)) {
            cardElement.style.display = "flex";
        } else {
            cardElement.style.display = "none";
        }
    })
})

// Context Menu

// const mainContext = document.querySelector(".main");
const mainContext = document.querySelector(".generate-cards");
mainContext.addEventListener("contextmenu", function(e) {
    {e.preventDefault()};

    // const rightClickElement = document.getElementById("rightClickElement");
    const rightClickElement = document.querySelector(".generate-cards");
    const menuBox = document.getElementById("right-click-menu");
    rightClickElement.addEventListener("contextmenu", popMenu);
    document.body.addEventListener("click", onBodyClick);

    function popMenu(e) {
        menuBox.style.display = "block";
        menuBox.style.top = e.pageY + "px";
        menuBox.style.left = e.pageX + "px";
    }

    function onBodyClick() {
        menuBox.style.display="none";
    }
})


