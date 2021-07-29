const h1 = document.querySelector("div.title:first-child h1");

const colors = ["green", "skyblue", "purple", "red"];

const superEventHandler = {
    handleMouseEnter : function() {
        h1.innerText = "The mouse is here!";
        h1.style.color = colors[0];
    },
    handleMouseLeave : function() {
        h1.innerText = "The mouse is gone!";
        h1.style.color = colors[1];
    },
    handleMouseContextMenu : function() {
        h1.innerText = "That was a right click!";
        h1.style.color = colors[3];
    },
    handleWindowResize : function() {
        h1.innerText = "You just resized";
        h1.style.color = colors[2];
    }
}

h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleMouseContextMenu);
window.addEventListener("resize", superEventHandler.handleWindowResize);