export { }
const numArray: number[] = [0, 1, 2, 3];
numArray.push(4);
console.log(numArray);

const strArray: string[] = [];
for (let i = 0; i < numArray.length; i++) {
    strArray.push("a");
}

console.log(strArray);