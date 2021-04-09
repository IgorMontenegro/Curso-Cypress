it('sem teste, ainda', () => {})

/* Forma antiga
const getSomething = callback => {
    setTimeout(() => {
    callback(12);
}, 1000)
}

const system = () =>{ 
    console.log('init');
    getSomething(some => {
        console.log(`Something is ${some}`);
        console.log('end')
    })
}
*/

const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
}
// USAR PROMISSES
const system = () => { 
    console.log('init');
    getSomething().then(some => {
        console.log(`Something is ${some}`)
        console.log('end')
    })            
}

//USANDO ASYNC
/*const system = async() => { 
    console.log('init');
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')              
}
*/


system();