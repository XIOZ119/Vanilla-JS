const generateForm = document.querySelector(".generate-number");
const generateInput = generateForm.querySelector("input");

const playForm = document.querySelector(".guess-number");
const playInput = playForm.querySelector("input");
const playButton = playForm.querySelector("Button");

const result = document.querySelector("#choose");
const winOrLost = document.querySelector("#win-lost");

function onPlayBtnClick(event) {
    event.preventDefault();
    const playNumber = playInput.value;
    const generateNumber = generateInput.value;
    localStorage.setItem("generateNumber", generateNumber);
    localStorage.setItem("playNumber", playNumber);
    if ( playInput.value == 0 || generateInput.value == 0) {
        alert("Please write number");
    } else if ( playInput.value > generateInput.value ) {
        alert("Please rewrite guess the number");
    } else {
        result.classList.remove("hidden");
        winOrLost.classList.remove("hidden");
    }
    
}

function randomChange() {
    var randomNumber = Math.floor(Math.random()*generateInput.value)+1;
    result.innerText = "You chose: " + playInput.value + ", the machine chose : " + randomNumber;
    if ( randomNumber == playInput.value ) { 
        winOrLost.innerText = "You win!"
    } else { 
        winOrLost.innerText = "You lose!"
    }
    
}

playButton.addEventListener("click", onPlayBtnClick);







// 둘 다 숫자를 입력해야만 숨겨진 결과들이 나와야함 
// 추측 숫자는 발생 최대 숫자보다 작야야함 
// 랜덤숫자가 발생해야함
// 랜덤숫자와 추측 숫자 크기 비교 
// 숨겨진 글자에 윈 혹은 페일 나와야함 