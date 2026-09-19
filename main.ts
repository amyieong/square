input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 3; index++) {
        turtle.forward(1)
        turtle.turnRight()
        turtle.pen(TurtlePenMode.Down)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index2 = 0; index2 <= 4; index2++) {
        turtle.forward(2)
        turtle.turnRight()
        turtle.pen(TurtlePenMode.Down)
    }
})
basic.forever(function () {
	
})
