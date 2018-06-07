//var 声明变量
console.log(a);
var a = 1;
console.log(a);

//预解析 上述代码等效于
var a;
console.log(a);
a = 1;
console.log(a);

//思考下述代码输出什么？理解ES5中，是否有块作用域，是否有函数作用域，如何理解下述代码
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();
//等效于
var temp = new Date();
function f() {
    var temp;
    console.log(temp);
    if(false){
        temp = "Hi!";
    }
}
f();

//let方式
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();//Thu Jun 07 2018 08:11:28 GMT+0800 (中国标准时间)

var temp = new Date();
function f() {
    console.log(temp);
    //if(false){
        let temp = "Hi!";
    //}
}
f();//报错

//let和const不存在变量提升
console.log(a);//报错
let a = 2;
console.log(a);











