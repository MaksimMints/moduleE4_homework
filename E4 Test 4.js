function Appliance(name){
  this.name = name
}

Appliance.prototype.getOffOn = function(){
let working = false;
if (this.off_on == true) {
  working = true
} else {
  working = false
}
return working;
}

function ElectricApp (name, power, color, price, off_on){
  this.name = name,
  this.power = power,
  this.color = color,
  this.price = price,
  this.off_on = off_on,
  this.group = 'electric',

  this.showPower = function(){
      console.log(`The power of ${this.name} is ${this.power}`)
  },

  this.showPrice = function(){
      console.log(`The price of ${this.name} is ${this.price} $`)
  }

}

ElectricApp.prototype = new Appliance();

const toster = new ElectricApp('toster', 10, 'white', 100, true);
const lamp = new ElectricApp('lamp', 2, 'red', 50, true);
const laptop = new ElectricApp('laptop', 5, 'black', 1000, false);

let allElectricApp = [toster, lamp, laptop];

let sumPower = function(arrey){
let total = 0;
for (let value of arrey){
  if (value.getOffOn() === true) {
    total += value.power;
  } else {
    total
  }
}
return total;

};

toster.showPower();
lamp.showPrice();
console.log(sumPower(allElectricApp));