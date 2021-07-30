const h1 = document.querySelector("h1");

function handleWindowResize() {
    const currentSize = window.innerWidth;
    let BackColor;
    let TitleColor;

    if (currentSize > 700 ){
        BackColor = "blue";
        TitleColor = "white";
    } else if (currentSize <700 && currentSize >= 400) {
        BackColor = "purple";
        TitleColor = "white";
    } else if (currentSize < 400) {
        BackColor = "yellow";
        TitleColor = "white";
    }
    document.body.style.backgroundColor = BackColor;
    h1.style.color = TitleColor;
}

window.addEventListener("resize", handleWindowResize);