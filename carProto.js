/**
 * Car class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

class Car {
    constructor(model) {
        this.model = model;
        this.speed = 0;
        this.accelerate = () => {
            this.speed++;
        }
        this.brake = () => {
            this.speed--;
        }
    }
}
/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
class ElectricCar extends Car {
    // finish later
}