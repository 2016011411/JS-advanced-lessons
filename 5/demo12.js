console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

var x = "1";
console.log(++x); //2 注意++和--的隐式类型转换
var x = "1";
console.log(x+1);//11 字符串
x/=1;
console.log(x);//11 数字

var i=1;
var y = ++i + ++i + ++i;
console.log(y); //9  2+3+4
