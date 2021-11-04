let Stored_Dice_3 = 0
let Dice_3 = 0
let Stored_Dice_1 = 0
let Dice_1 = 0
let Stored_Dice_5 = 0
let Dice_5 = 0
let Dice_2 = 0
let Dice4 = 0
let Stored_Dice_4 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_3 = Dice_3
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_1 = Dice_1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Yes)
    Stored_Dice_5 = Dice_5
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Yes)
    Dice_2 = Dice_2
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Yes)
    Dice4 = Stored_Dice_4
})
input.onGesture(Gesture.Shake, function () {
    Dice_1 = randint(1, 6)
    Dice_2 = randint(1, 6)
    Dice_3 = randint(1, 6)
    Dice4 = randint(1, 6)
    Dice_5 = randint(1, 6)
})
basic.forever(function () {
    if (true) {
        basic.showString("D#1")
        basic.showNumber(Dice_1)
        basic.showString("D#2")
        basic.showNumber(Dice_2)
        basic.showString("D#3")
        basic.showNumber(Dice_3)
        basic.showString("D#4")
        basic.showNumber(Dice4)
        basic.showString("D#5")
        basic.showNumber(Dice_5)
    } else {
        let Stored_Dice_2 = 0
        basic.showString("S#1")
        basic.showNumber(Stored_Dice_1)
        basic.showString("S#2")
        basic.showNumber(Stored_Dice_2)
        basic.showString("S#3")
        basic.showNumber(Stored_Dice_3)
        basic.showString("S#4")
        basic.showNumber(Stored_Dice_4)
        basic.showString("S#5")
        basic.showNumber(Stored_Dice_5)
    }
})
basic.forever(function () {
	
})
