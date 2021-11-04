Stored_Dice_3 = 0
Dice_3 = 0
Stored_Dice_1 = 0
Dice_1 = 0
Stored_Dice_5 = 0
Dice_5 = 0
Dice_2 = 0
Dice4 = 0

def on_pin_pressed_p0():
    global Stored_Dice_3
    basic.show_icon(IconNames.YES)
    Stored_Dice_3 = Dice_3
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_button_pressed_a():
    global Stored_Dice_1
    basic.show_icon(IconNames.YES)
    Stored_Dice_1 = Dice_1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_pin_pressed_p2():
    global Stored_Dice_5
    basic.show_icon(IconNames.YES)
    Stored_Dice_5 = Dice_5
input.on_pin_pressed(TouchPin.P2, on_pin_pressed_p2)

def on_button_pressed_b():
    global Dice_2
    basic.show_icon(IconNames.YES)
    Dice_2 = Dice_2
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_pin_pressed_p1():
    global Dice4
    Stored_Dice_4 = 0
    basic.show_icon(IconNames.YES)
    Dice4 = Stored_Dice_4
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

def on_gesture_shake():
    global Dice_1, Dice_2, Dice_3, Dice4, Dice_5
    Dice_1 = randint(1, 6)
    Dice_2 = randint(1, 6)
    Dice_3 = randint(1, 6)
    Dice4 = randint(1, 6)
    Dice_5 = randint(1, 6)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    basic.show_string("D#1")
    basic.show_number(Dice_1)
    basic.show_string("D#2")
    basic.show_number(Dice_2)
    basic.show_string("D#3")
    basic.show_number(Dice_3)
    basic.show_string("D#4")
    basic.show_number(Dice4)
    basic.show_string("D#5")
    basic.show_number(Dice_5)
basic.forever(on_forever)
