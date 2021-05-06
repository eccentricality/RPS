const rpsBodyElm = document.getElementById("rpsBody")
const botQuoteElm = document.getElementById("botQuote")
const rockButtonElm = document.getElementById("rockButton")
const paperButtonElm = document.getElementById("paperButton")
const scissorButtonElm = document.getElementById("scissorButton")
const butterHpSpanElm = document.getElementById("butterHpSpan")
const playerHpSpanElm = document.getElementById("playerHpSpan")

let randomThrowResult = null;
let overallThrowResult = null;
let playerThrowResult = null;
let butterThrowResult = null;
let butterHp = butterHpSpanElm
let playerHp = playerHpSpanElm

butterHp = 20;
playerHp = 20;

butterHpSpanElm.innerText = butterHp;
playerHpSpanElm.innerText = playerHp;

rpsBody.addEventListener("submit", e => {
    e.preventDefault();
})

//check win status on rock push
rockButtonElm.addEventListener('click', function(){
    playerThrowResult = "Rock";
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        botQuoteElm.innerText = "Rock === Rock, winResult = null";
    }
    else if (butterThrowResult === "Paper") {
        botQuoteElm.innerText = "rockVelocity !== requiredVelocity, Paper !== torn";
        playerHpSpanElm.innerText = playerHp--;
    }
    else if (butterThrowResult === "Scissor") {
        botQuoteElm.innerText = "rockHeft > scissorHeft, scissorCrushed: true";
        butterHpSpanElm.innerText = butterHp--;
    }
})

//check win status on paper push
paperButtonElm.addEventListener('click', function(){
    playerThrowResult = "Paper";
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        botQuoteElm.innerText = "paperArea > rockDensity, rockNeutralization: true";
        butterHpSpanElm.innerText = butterHp--;
    }
    else if (butterThrowResult === "Paper") {
        botQuoteElm.innerText = "Paper === Paper, winResult = null";
    }
    else if (butterThrowResult === "Scissor") {
        botQuoteElm.innerText = "paperIntegrity !== durable, Paper === torn";
        playerHpSpanElm.innerText = playerHp--;
    }
})

//check win status on scissor push
scissorButtonElm.addEventListener('click', function(){
    playerThrowResult = "Scissor";
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        botQuoteElm.innerText = "scissorSharp < rockDensity, scissorBroken = true";
        playerHpSpanElm.innerText = playerHp--;
    }
    else if (butterThrowResult === "Paper") {
        botQuoteElm.innerText = "scissorSharp > paperIntegrity, Paper === torn";
        butterHpSpanElm.innerText = butterHp--;
    }
    else if (butterThrowResult === "Scissor") {
        botQuoteElm.innerText = "Scissor === Scissor, winResult = null";
    }
})

//generate butter throw
function butterThrow(){
    let randomThrow = Math.floor(Math.random() * 10);
    let randomThrowResult = null;
    
    if (randomThrow >= 1 && randomThrow <= 3) {
        randomThrowResult = "Rock";
    }
    else if (randomThrow >= 4 && randomThrow <= 6) {
        randomThrowResult = "Paper";
    }
    else {
        randomThrowResult = "Scissor";
    }
    return randomThrowResult
}