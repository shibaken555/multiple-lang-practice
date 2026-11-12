const recordedOn: string = "1516-01-23T00:00:00.000Z";

const date: Date = new Date(recordedOn);
const year :number= date.getFullYear();
const month :number = date.getMonth()+1;
const day:number = date.getDate();

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(`${year}年${month}月${day}日`);

const recordDate = new Date("1516-01-23T00:00:00.000Z");
const strRecordDate: string = recordDate.toISOString();
console.log(strRecordDate.slice(0,10));