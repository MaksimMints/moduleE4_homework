const tools = {
    lenght: 250,
    application: 'bar'
};

const a = 'lenght'
const b = 'something'

function forCheck(str, obj) {
    return str in obj;
}

console.log(forCheck(a, tools))
console.log(forCheck(b, tools))