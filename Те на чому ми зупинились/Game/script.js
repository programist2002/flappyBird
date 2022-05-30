let block = document.getElementById("block");
let hole = document.getElementById("hole");
let character = document.getElementById("character");
let jumping = false;
let counter = 0;

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    counter++;
});

setInterval(()=> {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==false){
    character.style.top = (characterTop + 3) + "px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);
    if((characterTop > 480) || ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop + 130)))) {
        alert("Гра завершена. Кількість балів: " + counter);
        character.style.top = 100 + "px"; 
        counter = 0;
    }
}, 10)

const jump = () => {
    jumping = true;
    let jumpCount = 0;
    let jumpInterval = setInterval(() => {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if((characterTop>6) && (jumpCount<15)) {
            character.style.top = (characterTop - 4) + "px";
        }
        if(jumpCount>20) {
            clearInterval(jumpInterval);
            jumping = false;
            jumpCount = 0;
        }
        jumpCount++;
    }, 10);
}