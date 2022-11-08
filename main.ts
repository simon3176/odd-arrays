input.onButtonPressed(Button.A, function () {
    basic.showString("" + (list[0]))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (list[10]))
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (list[2]))
    music.playTone(294, music.beat(BeatFraction.Whole))
})
let list: string[] = []
list = [
"Beta",
"Alpha",
"Testing",
"No",
"Yes",
"Thx",
"No Thx",
"Bye",
"Hi",
"Hello",
"Player"
]
basic.forever(function () {
	
})
