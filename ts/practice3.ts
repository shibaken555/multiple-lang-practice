export{}

const invesmentPrincipal:number = 10000;
const invesmentReturn:number = 1.3;
const percentageOfIr:number = (invesmentReturn-1)*100;
console.log("投資の元本は"+invesmentPrincipal+"円です。");
console.log("投資のリターンは"+percentageOfIr+"%です。");

function calculatetotalAmount(productPrice:number,taxRate:number){
   let totalAmount:number = productPrice * taxRate;
   return totalAmount;
}

console.log("商品価格は" + "1000円です");
console.log("消費税率は" + "10%です");
console.log(calculatetotalAmount(1000,1.1));