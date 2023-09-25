class Appliance{
    constructor (name){
        this.name = name
    }
    getOffOn(){
        let working = false;
            if (this.off_on == true) {
                working = true
                } else {
                working = false
            }   
            
        return working;
    }
}

class ElectricApp extends Appliance{ constructor (name, power, color, price, off_on){
    super(name),
    this.power = power,
    this.color = color,
    this.price = price,
    this.off_on = off_on,
    this.group = 'electric'
    }
    showPower(){
        console.log(`The power of ${this.name} is ${this.power}`)
    }

    showPrice(){
        console.log(`The price of ${this.name} is ${this.price} $`)
    }

}


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