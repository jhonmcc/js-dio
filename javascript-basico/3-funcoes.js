// normal function 
function nomeFuncao(){
    console.log("funcao comum");
    return;
}

// arrow function usar em var preferencialmente em const
var nomeFuncao = () => {
    console.log("arrow funcao");
}

// funcao autoinvocavel é possivel fazer passagem de parametros
(
    function(){
        console.log("autoinvocacao");
        return;
    }
)();

// callback é passagem de funcoes como parametro é possivel fazer o envio de parametros
const msg = () => {
    console.log('from callback');
}

function callBack(callBack, param){
    console.log(param)
    callBack()
    return;
}
callBack(msg, 1);

// parametros default 
function paramDefault(param = 1){
    console.log(param)
}

// spread operator 
function spreadExample(...args){
    console.log(args);
}

// destructuring 
const USER = {
    id: 1,
    display: true,
    fullName : {
        first: 'Jhon',
        last: 'Callisaya'
    }
}

function userId({id}){
    return id;
}
function fullName({fullName: {first: first, last: last}}){
    return `${first} ${last}`;
}

console.log(userId(USER))
console.log(fullName(USER))