let lum = [255, 150, 50]
let x: number[] = []
for (let var1 = 0; var1 <= 4; var1++) {
    x.push(0)
}
let temps1 = 150
let temps2 = input.runningTime()
while (true) {
    if (input.runningTime() - temps2 >= temps1) {
        temps2 = input.runningTime()
        for (let y = 0; y <= 4; y++) {
            for (let var2 = 0; var2 <= x[y]; var2++) {
                if (var2 <= 4) {
                    led.plotBrightness(y, x[y] - var2, lum[var2])
                } else {
                    led.plotBrightness(y, x[y] - var2, 0)
                }
            }
            if (x[y] <= 8) {
                x[y] = x[y] + 1
            } else if (randint(0, 101) > 80) {
                x[y] = 0
            }
        }
    } else {
        basic.pause(temps1 - (input.runningTime() - temps2))
    }
}
