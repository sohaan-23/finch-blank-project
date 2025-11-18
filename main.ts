input.onButtonPressed(Button.A, function () {
    finch.setMove(MoveDir.Forward, 50, 100)
    finch.setTurn(RLDir.Left, 90, 100)
    finch.setMove(MoveDir.Forward, 50, 100)
    finch.setTurn(RLDir.Right, 90, 100)
    finch.setMove(MoveDir.Forward, 90, 100)
    finch.setTurn(RLDir.Right, 90, 100)
    finch.setMove(MoveDir.Forward, 40, 100)
    finch.setTurn(RLDir.Left, 90, 100)
    finch.setMove(MoveDir.Forward, 59, 100)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        finch.setMove(MoveDir.Forward, 10, 100)
        finch.setTurn(RLDir.Right, 90, 100)
    }
})
finch.startFinch()
basic.forever(function () {
	
})
