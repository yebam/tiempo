let luz = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onSound(DetectedSound.Loud, function () {
    if (luz == 0) {
        luz = 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        luz = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Square)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
