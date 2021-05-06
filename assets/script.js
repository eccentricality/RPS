const rpsBodyElm = document.getElementById("rpsBody")
const botQuoteElm = document.getElementById("botQuote")
const rockButtonElm = document.getElementById("rockButton")
const paperButtonElm = document.getElementById("paperButton")
const scissorButtonElm = document.getElementById("scissorButton")
const butterHpSpanElm = document.getElementById("butterHpSpan")
const playerHpSpanElm = document.getElementById("playerHpSpan")
const botResultImgElm = document.getElementById("botResultImg")
const butterResultImgElm = document.getElementById("butterResultImg")

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

rpsBodyElm.addEventListener("submit", e => {
    e.preventDefault();
})

//check win status on rock push
rockButtonElm.addEventListener('click', function(){

    playerThrowResult = "Rock";
    chgBotResultImgRock();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        chgButterResultImgRock();
        botQuoteElm.innerText = "(butter is still)";
        chgBotResultImgRock();
    }
    else if (butterThrowResult === "Paper") {
        chgButterResultImgPaper();
        botQuoteElm.innerText = "(butter jiggles maliciously)";
        playerHpSpanElm.innerText = playerHp--;
        chgBgPlayerHurt();
    }
    else if (butterThrowResult === "Scissor") {
        chgButterResultImgScissor();
        botQuoteElm.innerText = "(butter winces in pain)";
        butterHpSpanElm.innerText = butterHp--;
        chgBgButterHurt();
    }
})

//check win status on paper push
paperButtonElm.addEventListener('click', function(){
    playerThrowResult = "Paper";
    chgBotResultImgPaper();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        chgButterResultImgRock();
        botQuoteElm.innerText = "(butter snorts in fury)";
        butterHpSpanElm.innerText = butterHp--;
        chgBgButterHurt();
    }
    else if (butterThrowResult === "Paper") {
        chgButterResultImgPaper();
        botQuoteElm.innerText = "(butter is not margarine)";
        chgBotResultImgPaper();
    }
    else if (butterThrowResult === "Scissor") {
        chgButterResultImgScissor();
        botQuoteElm.innerText = "(butter cackles)";
        playerHpSpanElm.innerText = playerHp--;
        chgBgPlayerHurt();
    }
})

//check win status on scissor push
scissorButtonElm.addEventListener('click', function(){
    playerThrowResult = "Scissor";
    chgBotResultImgScissor();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        chgButterResultImgRock();
        botQuoteElm.innerText = "(butter is mocking you)";
        playerHpSpanElm.innerText = playerHp--;
        chgBgPlayerHurt();
    }
    else if (butterThrowResult === "Paper") {
        chgButterResultImgPaper();
        botQuoteElm.innerText = "(butter curses at you)";
        butterHpSpanElm.innerText = butterHp--;
        chgBgButterHurt();
    }
    else if (butterThrowResult === "Scissor") {
        chgButterResultImgScissor();
        botQuoteElm.innerText = "(butter is at room temp)";
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

//changes color depending who gets hurt
function chgBgButterHurt(){
    document.body.style.backgroundColor = "yellow";
    document.getElementById("rpsBody").style.backgroundColor = "yellow";
}

function chgBgPlayerHurt(){
    document.body.style.backgroundColor = "red";
    document.getElementById("rpsBody").style.backgroundColor = "red";
}

function chgBotResultImgRock(){
    botResultImgElm.src = "./assets/images/rock.png"
}

function chgBotResultImgPaper(){
    botResultImgElm.src = "./assets/images/paper.png"
}

function chgBotResultImgScissor(){
    botResultImgElm.src = "./assets/images/scissor.png"
}

function chgButterResultImgRock(){
    butterResultImgElm.src = "./assets/images/rock.png"
}

function chgButterResultImgPaper(){
    butterResultImgElm.src = "./assets/images/paper.png"
}

function chgButterResultImgScissor(){
    butterResultImgElm.src = "./assets/images/scissor.png"
}

//changes background back to original to make it look like white was flash
rockButtonElm.addEventListener("click", function(){
    var self = rpsBodyElm;
        oldBg = rpsBodyElm.style.background;
    setTimeout(function(){
        self.style.background = oldBg;
    }, 15);
})

paperButtonElm.addEventListener("click", function(){
    var self = rpsBodyElm;
        oldBg = rpsBodyElm.style.background;
    setTimeout(function(){
        self.style.background = oldBg;
    }, 15);
})

scissorButtonElm.addEventListener("click", function(){
    var self = rpsBodyElm;
        oldBg = rpsBodyElm.style.background;
    setTimeout(function(){
        self.style.background = oldBg;
    }, 15);
})