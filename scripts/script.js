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

function winChecker (squares, choice) {
    let checker = (choice + choice + choice)
    let winner = `${choice} wins it all!`
    let verdict;
    if ((squares[0] + squares[1] + squares[2]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[3] + squares[4] + squares[5]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[6] + squares[7] + squares[8]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[0] + squares[3] + squares[6]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[1] + squares[4] + squares[7]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[2] + squares[5] + squares[8]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[0] + squares[4] + squares[8]) === checker) {
        console.log(winner)
        verdict = true
    } else if ((squares[2] + squares[4] + squares[6]) === checker) {
        console.log(winner)
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
        if (winChecker(gameboard.game, player.choice) === true) {
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
        if (winChecker(gameboard.game, player1.choice) !== true) {
            editGameArray(player1, gameboard, element, elements)
            console.log(gameboard.game) // can be removed
        }
    } else if (gameboard.turn === true) { 
        if (winChecker(gameboard.game, player2.choice) !== true) {                           // player 2's turn
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
            if (winChecker(gameboard.game, player1.choice) === true || winChecker(gameboard.game, player2.choice) === true) {
                console.log("The game is over!")
            } else {
                addEvent(player1, player2, gameboard, element, elementsArray)
            }
            e.preventDefault()
        })
    })
    return gameboard.game
}
// the names will be changed soon
console.log(game(playerAssign("Player 1", "X"), playerAssign("Player 2", "O"), gameboardCreator()));