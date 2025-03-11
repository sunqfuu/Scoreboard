let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let countHome = 0
let countGuest = 0

// Count Home

function add1Home() {
    countHome += 1
    scoreHome.textContent = countHome
}
function add2Home() {
    countHome += 2
    scoreHome.textContent = countHome
}
function add3Home() {
    countHome += 3
    scoreHome.textContent = countHome
}

// Count Guest

function add1Guest() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}
function add2Guest() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}
function add3Guest() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}

// New Game

function newGame() {
    countHome = 0
    scoreHome.textContent = countHome
    countGuest = 0
    scoreGuest.textContent = countGuest
}