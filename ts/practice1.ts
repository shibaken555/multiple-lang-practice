console.log("Hey What's Up");
console.log("文字列中のダブルクォーテーション(\")は注意が必要");

let productPrice:number = 1200;
const CONSUMPTION_TAX_RATE = 1.1;
let totalAmount:number = productPrice * CONSUMPTION_TAX_RATE;
console.log(totalAmount);

function calculatetotalAmount(productPrice:number,taxRate:number){
   let totalAmount:number = productPrice * taxRate;
   return totalAmount;
}

console.log("商品価格は" + "1000円です");
console.log("消費税率は" + "10%です");
console.log(calculatetotalAmount(1000,1.1));