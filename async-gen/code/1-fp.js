
const obj = {
    [Symbol.iterator]() {
        let i = 0;
        const arr = [1,2,3,4];
        return {
            next() {
                const value = arr[i++];
                if (value !== undefined) {
                    return { value, done: false };
                }

                return { done: true };
            }
        }
    }
}

const iterator = obj[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


for (const item of obj) {
    console.log(item);
}