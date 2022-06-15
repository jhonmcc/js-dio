let promise = new Promise((resolve, reject) => {
    resolve('resolvida');
});

promise.then((msg) => console.log(msg)).catch((err) => console.log(err));
