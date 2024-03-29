const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  const bodyColor = document.querySelector("body");
  const button = document.querySelector("button");
  
  function clickButton(event) {
    event.preventDefault();
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  
    if (randomColor == randomColor2) {
      randomColor = colors[Math.floor(Math.random() * colors.length)];
      randomColor2 = colors[Math.floor(Math.random() * colors.length)];
      bodyColor.style.background =
        "linear-gradient(" + randomColor + "," + randomColor2 + ")";
    } else {
      bodyColor.style.background =
        "linear-gradient(" + randomColor + "," + randomColor2 + ")";
    }
  }
  
  button.addEventListener("click", clickButton);
  