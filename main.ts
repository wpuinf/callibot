// Define types

interface bumperObject {
    left: boolean,
    right: boolean,
    both: boolean,
    none: boolean
}

interface Position {
    x: number,
    y: number,
    direction: number
}

enum Direction {
    ForwardDir = 0,
    LeftDir = 270,
    RightDir = 90,
    BackwardsDir = 180,
}

class WorldMap {
    fields: boolean[][];
    static fieldSize = 500;

    setAt(x: number, y: number, value: boolean) {
        this.fields[Math.floor(x / WorldMap.fieldSize)][Math.floor(y / WorldMap.fieldSize)] = value;
    }
}

// Define functions

function right (angle: number): void {
    calliBot2.motor(C2Motor.links, C2Dir.vorwärts, 50);
    calliBot2.motor(C2Motor.rechts, C2Dir.rückwärts, 50);
    basic.pause(angle * 5);
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei);
};
function left (angle: number): void {
    calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 50);
    calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50);
    basic.pause(angle * 5);
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei);
};
function drive (speed: number, time: number): void {
    if (speed > 0 && speed < 100) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, speed);
    } else if (speed < 0 && speed < -100) {
        calliBot2.motor(C2Motor.beide, C2Dir.rückwärts, speed);
    } else {
        basic.showIcon(IconNames.No);
        return;
    }
    basic.pause(time);
    calliBot2.motorStop(C2Motor.beide, C2Stop.Frei);
};
function bumperState(): bumperObject {
    return {
        left: calliBot2.readBumperSensor(C2Sensor.links, C2State.an),
        right: calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an),
        both: calliBot2.readBumperSensor(C2Sensor.links, C2State.an) && calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an),
        none: !calliBot2.readBumperSensor(C2Sensor.links, C2State.an) && !calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an)
    };
};

// Code that is ran at startup

let map: boolean[][];
let position: {x: number, y: number, direction: number};
let distance: number = calliBot2.entfernung(C2Einheit.mm);


//[X][X][ ][X][X][ ]
//[X][ ][ ][ ][X][ ]
//[X][ ][X][ ][X][X]
//[X][X][X][ ][ ][ ]

basic.forever(() => {

});
