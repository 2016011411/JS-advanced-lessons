//对象类型 简述
var obj = {x:1,y:2};
console.log(obj.__proto__ === Object.prototype);//true
console.log(Object.prototype);

var arr = [1,2,3,4,5];
console.log(arr.__proto__ === Array.prototype);//true
console.log(Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

function foo() {
    console.log("foo function!");//true
};
console.log(foo.__proto__ === Function.prototype);//true
console.log(foo.__proto__.__proto__ === Object.prototype);//true

console.log(obj instanceof Object);//true
console.log(arr instanceof Object);//true
console.log(foo instanceof Object);//true
console.log(foo === window.foo);//true

for(var k in obj){
    console.log(k,obj[k]);//x 1  y 2
}

console.log(Object.keys(obj));//(2) ["x", "y"]

console.log("x" in obj);//true

for(var k in foo){
    console.log(k,foo[k]);//没有自身属性，所以没有输出
}
console.log("call" in foo);//true
console.log("apply" in foo);//true
console.log("arguments" in foo);//true