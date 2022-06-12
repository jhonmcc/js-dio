// exemplos de condicoes if, else if, else
var value = undefined;
if (value == null){
    console.log(value);
}

if (value === null){
    console.log(value);
}
else if (value != null){
    console.log(value)
}
else{
    console.log(value);
}

// switch
switch(value) {
    case null: 
        console.log(value); 
        break;
    case undefined: 
        console.log(value);
        break;
    default: console.log(value);
}