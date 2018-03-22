//Bool类型的值只有两个 true、false

//Undefined 的几种情况
var a;
console.log(a);//undefined

function foo(x,y) {
    console.log(x,y);
}
foo(1);//1 undefined

function fee() {
    //没有返回值的情况
}
var feeReturnValue = fee();
console.log(feeReturnValue);//undefined

console.log(typeof null);//object
