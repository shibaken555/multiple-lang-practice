export{}

console.log("処理開始");

for (let i =1;i <= 20;i++){
    if(i % 15 === 0){
        console.log(i + ":fizzbuzz")
    }
    if(i % 3 === 0){
        console.log(i + ":fizz");
    }
    if(i % 5 ===0){
        console.log(i + ":buzz");
    }
}