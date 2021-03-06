console.log(3=== 3);//true
console.log(3=== "3");//false
console.log(3== "3");//true
console.log(3== new String(3));//true
console.log(3=== new String(3));//false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz" === obj1);//false 基本类型 引用类型
console.log(obj1 == obj2);//false 不是指向同一个对象
console.log(obj1 === obj2);//false
console.log(obj1 == new String("xyz"));//false

var obj1 = new String("xyz");
var obj2 = obj1;
console.log("xyz" === obj1);//false 
console.log(obj1 == obj2);//true
console.log(obj1 === obj2);//true
console.log(obj1 == new String("xyz"));//false
//取反 先看==或===的结果再取反
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz" != obj1);//false
console.log(obj1 !== obj2);//true
console.log(obj1 != obj2);//true
console.log(obj1 != new String("xyz"));//true

console.log(2 == 2);//true
console.log(new Number(2) == new Number(2));//false
console.log(2 == new Number(2));//true