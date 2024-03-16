function playerAssign (name, choice) {
    const obj = {
        name: name,
        choice: choice
    }
    return obj
}

function gameboardCreator () {
    const gameboardObj = {
        game: [null, null, null, null, null, null, null, null, null],
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

function game (player1, player2, gameboard) {
    for (let i = 0; i < gameboard.game.length; i++) {
        if (gameboard.turn === false) {                            // player 1's turn
            let placer = prompt("Where would you like to put X? (1 - 9)")
            if (gameboard.game[(+placer) - 1] === null) {
                gameboard.game[(+placer) - 1] = player1.choice
                gameboard.turn = true
                console.log(gameboard.game)
                if (winChecker(gameboard.game, player1.choice) === true) {
                    break
                }
            } else {
                i--
            }
        } else {                            // player 2's turn
            let placer = prompt("Where would you like to put O? (1 - 9)")
            if (gameboard.game[(+placer) - 1] === null) {
                gameboard.game[(+placer) - 1] = player2.choice
                gameboard.turn = false
                console.log(gameboard.game)
                if (winChecker(gameboard.game, player2.choice) === true) {
                    break
                }
            } else {
                i--
            }
        }
    }
    return gameboard.game
}

console.log(game(playerAssign(prompt("Enter name for X"), "X"), playerAssign(prompt("Enter name for O"), "O"), gameboardCreator()));