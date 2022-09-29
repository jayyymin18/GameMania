console.log("Welcome to Tic Tac Toe!");
let music = new Audio("music.mp3");
let turnaudio = new Audio("ting.mp3");
let gameoveraudio = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;




const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 145],
    ]
    wins.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[1]].innerText === boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
             document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}

//game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            turnaudio.play();
            checkWin();
            if (!gameover) {
            document.getElementsByClassName("info")[0].
            innerText = "Turn for " + turn;}
        }
    })
})

//add onclick event to reset button
reset.addEventListener('click', () => {
    let boxText = document.querySelectorAll('.boxtext');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})

