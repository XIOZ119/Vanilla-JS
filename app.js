const h1 = document.querySelector("div.hello:first-child h1");


console.dir()

function handleTitleClick(){
    console.log("h1 was clicked");
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!")
}

function handleWindowOffLine() {
    alert("SOS no WIFI");
}

function handleWindowOnLine() {
    alert("well");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine);
window.addEventListener("online", handleWindowOnLine);