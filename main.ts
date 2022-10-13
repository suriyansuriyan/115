let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P3,
    PingUnit.Centimeters
    )
    basic.showNumber(distance)
    if (distance > 0 && distance < 15) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Double))
        basic.pause(500)
        music.playTone(988, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Double))
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 180)
        basic.pause(5000)
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(5000)
    } else {
        pins.servoWritePin(AnalogPin.P2, 0)
    }
})
