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