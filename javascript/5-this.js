// this refere-se a algo do objeto
const pessoa = {
    name: 'Jhon',
    last: 'Mcc',
    full: function(){
        return `${this.name} ${this.last}`
    }
}

console.log(pessoa.full());

pessoa = {
    name: 'pessoaNome'
}
const animal = {
    name: 'animalName'
}

// print propName by this
function printSomething(){
    console.log(this.name);
}

printSomething.call(pessoa);
printSomething.apply(pessoa);

const returnName = function(){
    return this.name;
}

let nameProp = returnName.bind({name: 'pessoaName'})
console.log(nameProp());