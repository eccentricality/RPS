const rpsBodyElm = document.getElementById("rpsBody")
const playerQuoteElm = document.getElementById("playerQuote")
const rockButtonElm = document.getElementById("rockButton")
const paperButtonElm = document.getElementById("paperButton")
const scissorButtonElm = document.getElementById("scissorButton")
const playerResultImgElm = document.getElementById("playerResultImg")
const butterResultImgElm = document.getElementById("butterResultImg")
const butterHpSpanElm = document.getElementById("butterHpSpan")
const playerHpSpanElm = document.getElementById("playerHpSpan")

let randomThrowResult = null;
let overallThrowResult = null;
let playerThrowResult = null;
let butterThrowResult = null;
let butterHp = 2;
let playerHp = 2;

window.onload = setButterHp();
window.onload = setPlayerHp();

//check win status on submitting rock
rockButtonElm.addEventListener('click', function(){
    playerThrowResult = "Rock";
    chgplayerResultImgRock();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        chgButterResultImgRock();
        playerQuoteElm.innerText = "(butter is still)";
        chgplayerResultImgRock();
    }
    else if (butterThrowResult === "Paper") {
        playerDecrement();
        chgButterResultImgPaper();
        playerQuoteElm.innerText = "(butter jiggles maliciously)";
        chgBgPlayerHurt();
    }
    else {
        butterDecrement();
        chgButterResultImgScissor();
        playerQuoteElm.innerText = "(butter winces in pain)";
        chgBgButterHurt();
    }
})

//check win status on submitting paper
paperButtonElm.addEventListener('click', function(){
    playerThrowResult = "Paper";
    chgplayerResultImgPaper();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        butterDecrement();
        chgButterResultImgRock();
        playerQuoteElm.innerText = "(butter snorts in fury)";
        chgBgButterHurt();
    }
    else if (butterThrowResult === "Paper") {
        chgButterResultImgPaper();
        playerQuoteElm.innerText = "(butter is not margarine)";
        chgplayerResultImgPaper();
    }
    else {
        playerDecrement();
        chgButterResultImgScissor();
        playerQuoteElm.innerText = "(butter cackles)";
        chgBgPlayerHurt();
    }
})

//check win status on submitting scissor
scissorButtonElm.addEventListener('click', function(){
    playerThrowResult = "Scissor";
    chgplayerResultImgScissor();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        playerDecrement();
        chgButterResultImgRock();
        playerQuoteElm.innerText = "(butter is mocking you)";
        chgBgPlayerHurt();
    }
    else if (butterThrowResult === "Paper") {
        butterDecrement();
        chgButterResultImgPaper();
        playerQuoteElm.innerText = "(butter curses at you)";
        chgBgButterHurt();
    }
    else {
        chgButterResultImgScissor();
        playerQuoteElm.innerText = "(butter is at room temp)";
    }
})

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
function setButterHp(){
    butterHpSpanElm.innerText = butterHp;
}
function setPlayerHp(){
    playerHpSpanElm.innerText = playerHp;
}

function chgBgButterHurt(){
    document.body.style.backgroundColor = "yellow";
    document.getElementById("rpsBody").style.backgroundColor = "yellow";
}

function chgBgPlayerHurt(){
    document.body.style.backgroundColor = "red";
    document.getElementById("rpsBody").style.backgroundColor = "red";
}

function chgplayerResultImgRock(){
    playerResultImgElm.src = "./assets/images/rock.png"
}

function chgplayerResultImgPaper(){
    playerResultImgElm.src = "./assets/images/paper.png"
}

function chgplayerResultImgScissor(){
    playerResultImgElm.src = "./assets/images/scissor.png"
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

function butterDecrement(){
    if(butterHp >= 0){
        butterHpSpanElm.innerText = butterHp--;
    }
    return butterHp;
}

function playerDecrement(){
    if(playerHp >= 0){
        playerHpSpanElm.innerText = playerHp--;
    }
    return playerHp;
}

function youWin(){
    alert("You Win!");
    location.reload();
}

function youLose(){
    alert("You Lose!");
    location.reload();
}