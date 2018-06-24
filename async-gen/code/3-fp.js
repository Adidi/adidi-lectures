
const getRandomNumber = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const number = Math.floor(Math.random()* 1000);
            resolve(number);
        }, 1000);
    })
}


async function* asyncGen() {
    while (true) { 
        const number = await getRandomNumber();
        yield number;
    }
}


async function* map(asyncGen, transform) {
    for await (const item of asyncGen) {
        yield transform(item);
    }
}

async function* filter(asyncGen, test) {
    for await (const item of asyncGen) {
        if (test(item)) {
            yield item;
        }
    }
} 

(async () => {

    const mappableAsyncGen = filter(asyncGen(), n => n > 500);

    for await (const item of mappableAsyncGen) {
        console.log(item);
    }

})();

