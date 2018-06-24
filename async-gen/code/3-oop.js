
const delay = s => new Promise(resolve => setTimeout(resolve, s*1000));


class IntegerArray { 
    constructor() {
        this.value = 0;
    }

    async *[Symbol.asyncIterator]() {
        while (true) {
            await delay(.5);
            yield this.value++;
        }
    }

    async *map(transform) {
        for await (const item of this) {
            yield transform(item);
        }
    }
}

(async () => {
    const iArr = new IntegerArray();
    const asyncGen = process.argv[2] === 'map' ? iArr.map(n => n*n) : iArr;
    for await (const item of asyncGen) {
        console.log(item);
    }
})();