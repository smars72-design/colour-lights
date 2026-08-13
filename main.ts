input.onButtonPressed(Button.A, function () {
    radio.sendString("RED")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "RED") {
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (receivedString == "BLUE") {
        robotbit.rgb().showColor(neopixel.colors(NeoPixelColors.Blue))
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("BLUE")
})
radio.setGroup(42)
basic.forever(function () {
	
})
