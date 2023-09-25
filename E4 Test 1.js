const tools = {
  application : "hand"
}

const screwdriver = Object.create(tools);

screwdriver.allLength = 250;

function ownParameters(obj){
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key} : ${obj[key]}`);
    }   
  }
}

ownParameters(screwdriver);