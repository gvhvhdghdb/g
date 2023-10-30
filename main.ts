input.onButtonPressed(Button.A, function () {
    cuteBot.motors(100, 100)
    cuteBot.stopcar()
    cuteBot.turnright()
    cuteBot.moveTime(cuteBot.Direction.forward, 50, 5)
    led.unplot(0, 0)
})
input.onGesture(Gesture.Shake, function () {
	
})
