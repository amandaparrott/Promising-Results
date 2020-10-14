// //add 6 & 2
// slowMath.add(6, 2)
// .then((sum) => {
//     console.log(`The sum of 6 and 2 is ${sum}.`);
//     //multiply by 2
//     return slowMath.multiply(sum, 2);
// }) .then ((product => {
//     console.log(`Eight multiplied by two is ${product}.`);
//     //divide by 4
//     return slowMath.divide(product, 4);
// })) .then((dividend => {
//     console.log(`Sixteen divied by 4 is ${dividend}.`);
//     //subtract 3
//     return slowMath.subtract(dividend, 3);
// })) .then((difference => {
//     console.log(`Four minus 3 is ${difference}.`);
//     //add 98
//     return slowMath.add(difference, 98);
// })) .then((sum) => {
//     console.log(`One plus 98 is ${sum}.`);
//     //find remainder when divided by 2
//     return slowMath.remainder(sum, 2);
// }).then((remainder) => {
//     console.log(`The remainder of 99 divided by 2 is ${remainder}.`);
//     //multiply by 50
//     return slowMath.multiply(remainder, 50);
// }) .then((product) => {
//     console.log(`One multiplied by 50 is ${product}.`);
//     //find remainder when divided by 40
//     return slowMath.remainder(product, 40);
// }) .then((remainder) => {
//     console.log(`The remainder of 50 divided by 40 is ${remainder}.`);
//     //add 32
//     return slowMath.add(remainder, 32);
// }).then ((sum) => {
//     console.log(`Ten plus 32 is ${sum}. The answer to the meaning of life, the universe, and everything is ${sum}.`);
// }) .catch ((err) => {
//     console.log(`There's been a mistake. Don't Panic.`)
//     console.log(err); 
// });


async function doMath() {
    try { let num = await slowMath.add(6, 2); 
        console.log(`The sum of 6 and 2 is ${num}.`);
        num = await slowMath.multiply(num, 2);
        console.log(`Eight multiplied by two is ${num}.`);
        num = await slowMath.divide(num, 4);
        console.log(`Sixteen divided by 4 is ${num}.`);
        num = await slowMath.subtract(num, 3);
        console.log(`Four minus 3 is ${num}.`);
        num = await slowMath.add(num, 98);
        console.log(`One plus 98 is ${num}.`);
        num = await slowMath.remainder(num, 2);
        console.log(`The remainder of 98 divided by 2 is ${num}.`);
        num = await slowMath.multiply(num, 50);
        console.log(`One multiplied by 50 is ${num}.`);
        num = await slowMath.remainder(num, 40);
        console.log(`The remainder of 50 divided by 40 is ${num}.`);
        num = await slowMath.add(num, 32);
        console.log(`Ten plus 32 is ${num}. The answer to the meaning of life, the universe, and everything is ${num}.`);
    } catch (err) {
        console.log(err); 
    };
}

doMath();