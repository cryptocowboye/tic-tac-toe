function playerAssign (name, choice) {
    const obj = {
        name: name,
        choice: choice
    }
    return obj
}

function gameboardCreator () {
    const gameboardObj = {
        game: ["", "", "", "", "", "", "", "", ""],
        turn: false
    }
    return gameboardObj
}

function winChecker (squares, choice, player) {
    let checker = (choice + choice + choice)
    let verdict;
    if ((squares[0] + squares[1] + squares[2]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[3] + squares[4] + squares[5]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[6] + squares[7] + squares[8]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[0] + squares[3] + squares[6]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[1] + squares[4] + squares[7]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[2] + squares[5] + squares[8]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[0] + squares[4] + squares[8]) === checker) {
        resultH1(player)
        verdict = true
    } else if ((squares[2] + squares[4] + squares[6]) === checker) {
        resultH1(player)
        verdict = true
    }
    return verdict
}

function domObj () {
    return {contents: document.querySelectorAll(".choice-container")}
}

function editGameArray (player, gameboard, element, elements) {
    if (gameboard.game[elements.indexOf(element)] === "") {
        gameboard.game[elements.indexOf(element)] = player.choice
        elements[elements.indexOf(element)].textContent = player.choice
        if (winChecker(gameboard.game, player.choice, player) === true) {
            return;
        }
    }
    if (gameboard.turn === false) {
        gameboard.turn = true
    } else {
        gameboard.turn = false
    }
}

function addEvent (player1, player2, gameboard, element, elements) {
    if (gameboard.turn === false) {                            // player 1's turn
        if (winChecker(gameboard.game, player1.choice, player1) !== true) {
            editGameArray(player1, gameboard, element, elements)
            console.log(gameboard.game) // can be removed
        }
    } else if (gameboard.turn === true) { 
        if (winChecker(gameboard.game, player2.choice, player2) !== true) {                           // player 2's turn
            editGameArray(player2, gameboard, element, elements)
            console.log(gameboard.game) // can be removed
        }
    }
}


function game (player1, player2, gameboard) {
    let elements = domObj()
    let elementsArray = [...elements.contents]
    elements.contents.forEach((element) => {
        element.addEventListener("click", (e) => {
            e.target.disabled = true
            if (winChecker(gameboard.game, player1.choice, player1) === true || winChecker(gameboard.game, player2.choice, player2) === true) {
                return;
            } else {
                startGameH1()
                addEvent(player1, player2, gameboard, element, elementsArray)
            }
            e.preventDefault()
        })
    })
    return gameboard.game
}

function erase() {
    const squaresNodelist = [...document.querySelectorAll(".choice-container")]
    squaresNodelist.forEach((square) => square.textContent = "")
}

function eraseArray(gameboard) {
    gameboard.game = ["", "", "", "", "", "", "", "", ""]
}

function createH1() {
    let gameH1 = document.createElement("h1")
    let parent = document.querySelector("body")
    gameH1.classList.add("result")
    gameH1.textContent = ""
    parent.prepend(gameH1)
}

function startGameH1() {
    let result = document.querySelector(".result")
    result.textContent = "The game has started!"
}

function resultH1 (player) {
    let result = document.querySelector(".result")
    result.textContent = `${player.name} won the game!`
}

function gameStarter() {
    let playerOne = document.querySelector("#player_one_name")
    let playerTwo = document.querySelector("#player_two_name")
    let submission = document.querySelector("button[type='submit']")
    createH1()
    submission.addEventListener("click", (e) => {
        erase()
        eraseArray(gameboardCreator())
        startGameH1()
        game(playerAssign(playerOne.value, "X"), playerAssign(playerTwo.value, "O"), gameboardCreator())
        e.preventDefault()
    })
}

// the names will be changed soon
gameStarter()

