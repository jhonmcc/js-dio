async function method(param){
    let promise = new Promise((resolve, reject) => {
        if (param == 0){
            resolve('resolvida');
        }
        else{
            reject('nao resolvida');
        }
    });

    let res = await promise.then(() => console.log('resolvida')).catch(() => console.log('nao resolvida'));
    return res;
}

// call method using async await
console.log(method(0))