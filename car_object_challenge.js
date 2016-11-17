function carObject(var_make, var_model, var_color) {
  var speed = 0;
  return {
    make: var_make,
    model: var_model,
    color: var_color,
    speed: speed,
    getData: function() {
      return this.model + " " + this.color + " " + this.make + ".";
    },
    getSpeed: function() {
      return this.speed;
    },
    accelerate: function() {
      this.speed += 10;
    },
    brake: function(x) {
      this.speed -= x;
      if (this.speed < 7) {
        this.speed = 0;
      }
    }
  };
}
//Define object car by running closure function
var car = carObject("hyundai", 2011, "blue");
console.log(car.getSpeed());
//Accelerate car up to, but not exceeding 85 by increments of 10. When car gets >75, automatically set to 85 and loop breaks.
while (car.getSpeed() < 85) {
  if (car.getSpeed()>75) {
    car.speed = 85;
    break;
  }
  car.accelerate();
}

console.log(car.getSpeed());

//While car speed is above 0, decelerate at a random amount not to exceed half the current speed of the car.
while (car.getSpeed() > 0) {
  car.brake(Math.floor(Math.random() * (car.speed / 2) ));
  console.log(car.getSpeed());

}
//Older brake/decelerate function. While car speed is above 0, brake by amount (set in closure).
// while (car.getSpeed() > 0) {
//     car.brake();
//   if (car.getSpeed() < 0) {
//     break;
//   }
//}

//console.log(car.getSpeed());
