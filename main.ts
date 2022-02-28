basic.forever(function () {
	
})


function drive(speed: number, time: number):void {
    if (speed > 0 && speed < 100) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, speed);
    } else if (speed < 0 && speed < -100) {
        calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, speed);
    } else {
        basic.showIcon(IconNames.No);
        return;
    }
    basic.pause(time);
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
}

function left(angle: number): void {
    calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 50);
    calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50);
    basic.pause(angle * 5);
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei);
}

function right(angle: number): void {
    calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 50);
    calliBot2.motor(C2Motor.rechts, C2Dir.rückwärts, 50);
    basic.pause(angle * 5);
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei);
} 