
function* gen(start, end) {
    for (let i = start; i< end; i++) {
        yield i;
    }
}

const it = gen(1, 10);

for (const item of gen(1, 10)) {
    console.log(item);
}
