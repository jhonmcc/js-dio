// MAP
var arr = [1,2,3,4,5,5,4,3,2,1];
// sintaxe array.map(callback, thisARgs)
var map =  arr.map((item) => console.log(item));

// sintaxe array.map(callback, thisARgs)
var map = arr.map((item) => console.log(item));
console.log(map);
// metodo semelhante foreach
arr.forEach((item) => console.log(item));


// FILTER
var arr = ['1','2','3','4','5','5','4','3','2','1'];
// sintaxe arr.filter(callback,thisArgs)
let resFilter = arr.filter((item) => item.match('1'));
console.log(resFilter);


// REDUCE
// sintaxe arr.reduce(calbackfn,initialValue)
let array = [1,2,3,4,5];
let reduce = array.reduce((itemAnterior, valorAtual) => itemAnterior + valorAtual, 0);
console.log(reduce);
// da para utilizar com objetos também
