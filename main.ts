let numero_dado = 0
input.onGesture(Gesture.Shake, function () {
    numero_dado = randint(1, 6)
    if (numero_dado == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
    if (numero_dado == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (numero_dado == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (numero_dado == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (numero_dado == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else if (numero_dado == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        basic.pause(5000)
        basic.clearScreen()
    } else {
    	
    }
})
basic.forever(function () {
	
})
