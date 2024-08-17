
const searchButton = document.getElementById("search-button");
const searchModal = document.getElementById("search-popup");
const closeIcon = document.getElementById("close-icon");
const stickyAside = document.getElementById("side-social-media");
const progressBar = document.getElementById("progress");

const menuDisplay = document.getElementById("menu-dropdown");
const menuClick = document.getElementById("menu-bar");
const menuClose = document.getElementById("menu-close");

const documentHeight = document.documentElement.scrollHeight - window.innerHeight

searchButton.addEventListener("click", openSearchModal )
menuClick.addEventListener("click", openMenuModal )


closeIcon.addEventListener("click", closeSearchModal )
menuClose.addEventListener("click", closeMenuModal)
document.addEventListener("scroll",scrollStickyAside )

function scrollStickyAside(){
    stickyAside.style.position = "sticky";
    stickyAside.style.top = "150px";
    const scrolledValue = window.scrollY;
    const progressValue = scrolledValue / documentHeight *100;
    progressBar.value = progressValue;
}


function closeSearchModal()
{
    searchModal.style.display = "none";
}

function openSearchModal()
{
    searchModal.style.display = "flex";  
}

function openMenuModal()
{
    menuDisplay.style.display = "block"; 
}

function closeMenuModal()
{
    menuDisplay.style.display = "none";
}