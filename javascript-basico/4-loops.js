// exemplos de loops 
for (let i = 0; i < 5; i++){
    console.log(i);
}

var text = "iteravel";
for (let i = 0; i < text.length; i++){
    console.log(text[i]);
}

var arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

var obj = {
    name: 'Jhon',
    age: 22
}
for (prop in obj) {
    console.log(prop);
}

// exemplos while
let index = 0;
while (index <= 5) {
    console.log(index);
    index++;
}

index = 5;
do {
    console.log(index)
    index--;
} while (index >= 0);