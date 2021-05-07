const rpsBodyElm = document.getElementById("rpsBody")
const playerQuoteElm = document.getElementById("playerQuote")
const rockButtonElm = document.getElementById("rockButton")
const paperButtonElm = document.getElementById("paperButton")
const scissorButtonElm = document.getElementById("scissorButton")
const playerResultImgElm = document.getElementById("playerResultImg")
const butterResultImgElm = document.getElementById("butterResultImg")
const butterHpSpanElm = document.getElementById("butterHpSpan")
const playerHpSpanElm = document.getElementById("playerHpSpan")
const bgMusicElm = document.getElementById("bgMusic")
const butterHitMusicElm = document.getElementById("butterHit")
const playerHitMusicElm = document.getElementById("playerHit")
const missHitMusicElm = document.getElementById("missHit")

let randomThrowResult = null;
let overallThrowResult = null;
let playerThrowResult = null;
let butterThrowResult = null;
let inputHP = null;
let butterHp = inputHP;
let playerHp = inputHP;

userInputHp();


//check win status on submitting rock
rockButtonElm.addEventListener('click', function(){
    audioPlayBG();
    playerThrowResult = "Rock";
    chgplayerResultImgRock();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        audioPlayMissHit();
        chgButterResultImgRock();
        playerQuoteElm.innerText = "(butter is still)";
        chgplayerResultImgRock();
    }
    else if (butterThrowResult === "Paper") {
        playerDecrement();
        audioPlayPlayerHit();
        chgButterResultImgPaper();
        playerQuoteElm.innerText = "(butter jiggles maliciously)";
        chgBgPlayerHurt();
    }
    else {
        butterDecrement();
        audioPlayButterHit();
        chgButterResultImgScissor();
        playerQuoteElm.innerText = "(butter winces in pain)";
        chgBgButterHurt();
    }
})

//check win status on submitting paper
paperButtonElm.addEventListener('click', function(){
    audioPlayBG();
    playerThrowResult = "Paper";
    chgplayerResultImgPaper();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        butterDecrement();
        audioPlayButterHit();
        chgButterResultImgRock();
        playerQuoteElm.innerText = "(butter snorts in fury)";
        chgBgButterHurt();
    }
    else if (butterThrowResult === "Paper") {
        audioPlayMissHit();
        chgButterResultImgPaper();
        playerQuoteElm.innerText = "(butter is not margarine)";
        chgplayerResultImgPaper();
    }
    else {
        playerDecrement();
        audioPlayPlayerHit();
        chgButterResultImgScissor();
        playerQuoteElm.innerText = "(butter cackles)";
        chgBgPlayerHurt();
    }
})

//check win status on submitting scissor
scissorButtonElm.addEventListener('click', function(){
    audioPlayBG();
    playerThrowResult = "Scissor";
    chgplayerResultImgScissor();
    butterThrowResult = butterThrow();
    if (butterThrowResult === "Rock") {
        playerDecrement();
        audioPlayPlayerHit();
        chgButterResultImgRock();
        playerQuoteElm.innerText = "(butter is mocking you)";
        chgBgPlayerHurt();
    }
    else if (butterThrowResult === "Paper") {
        butterDecrement();
        audioPlayButterHit();
        chgButterResultImgPaper();
        playerQuoteElm.innerText = "(butter curses at you)";
        chgBgButterHurt();
    }
    else {
        audioPlayMissHit();
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

function userInputHp(){
    inputHP = prompt("How many rounds would you like to play?")
    butterHp = inputHP;
    playerHp = inputHP;
    butterHpSpanElm.innerText = butterHp;
    playerHpSpanElm.innerText = playerHp;

}

function setButterHp(){
    butterHpSpanElm.innerText = butterHp;
}
function setPlayerHp(){
    playerHpSpanElm.innerText = playerHp;
}

function audioPlayBG(){
    bgMusicElm.volume = .4;
    bgMusicElm.play();
}

function audioPlayButterHit(){
    butterHitMusicElm.volume = .4;
    butterHitMusicElm.play();
}

function audioPlayPlayerHit(){
    playerHitMusicElm.volume = .4;
    playerHitMusicElm.play();
}

function audioPlayMissHit(){
    missHitMusicElm.volume = .4;
    missHitMusicElm.play();
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
    if(butterHp > 0){
        butterHp--;
        butterHpSpanElm.innerText = butterHp;
    }
}

function playerDecrement(){
    if(playerHp > 0){
        playerHp--;
        playerHpSpanElm.innerText = playerHp;
    }
}

function youWin(){
    alert("You Win!");
    location.reload();
}

function youLose(){
    alert("You Lose!");
    location.reload();
}