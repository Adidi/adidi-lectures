
class IntegerArray { 
    constructor() {
        this.arr = [];
    }

    add(value) {
        if (Number.isInteger(value)){
            this.arr.push(value);
        }

        return this;
    }   
    
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                const value = this.arr[index++];
                if (value !== undefined) {
                    return { value, done: false };
                }

                return { done: true };
            }
        }
    }

    map(transform) {
        const arr = new IntegerArray();
        for (const item of this) {
            arr.add(transform(item));
        }
        return arr;
    }

    
}

const iArr = new IntegerArray();

iArr.add(1).add(2).add(3).add('afsa').add('4').add(5).add(3);


for (const item of iArr) {
    console.log(item);
}

console.log('*'.repeat(80));
for (const item of iArr.map(n => n*n)) {
    console.log(item);
}
