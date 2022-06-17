// fetch retorna uma promise
fetch('url', {
    method: 'GET',
    cache: 'no-cache'
})
.then(res => res.json())
.then(json => console.log(json))


fetch('url', {
    method: 'POST', 
    cache: 'no-cache',
    body: JSON.stringify(data)
})
.then(res => Response.json())
.then(json => console.log(json))

// exemplo consumindo api 
const getData = async (url) => {
    try {  
        const data = await fetch(url)
            .then((res) => res.json())
            .then(json => console.log(json))   
        return data
    }
    catch (e) {
        console.log(e);
    }
}