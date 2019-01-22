function x() {
    let i = 0;
    while (i < 1000000000) {

        i++;
    }
    return 3;
}

async function test() {
    const x = await x();
    console.log(x);
    //return x;
}

console.log(x())
