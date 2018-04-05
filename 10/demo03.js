//ES5中无块作用域
{
    var a = 4;
}
console.log(a);//4

//变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    alert("userId = "+userId);//userId =  234
};
//一长串代码后，假如看不见上述代码了
var a=2,b=3;
if(a<b){
    var userId = 234;
}

var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
    alert("userId = "+userId);//userId =  123
};
//封装成一个块级作用域
(function(){
    var a=2,b=3;
    if(a<b){
        var userId = 234;
    }
}());
