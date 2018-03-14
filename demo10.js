//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);//true
console.log(a === b);//false

//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值

var arr = [1,2,3,4,5];
arr.length = 1;//把数组改变了
console.log(arr,arr.length);//[1]  1