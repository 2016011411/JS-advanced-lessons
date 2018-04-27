function thisTest(){
    console.log(this === window);//true
}
thisTest();

function thisTest(){
   var a=b=2;
}
thisTest();
console.log(a,b);//a报错 b = 2
//a不是全局变量 b是全局变量

var a = 10;b = "Hi";
function thisTest2(){
    this.a = 20;
    delete this.b;
    this.c = "新添加属性";
}
thisTest2();
console.log(a,c);//20  "新添加属性"


 var point = {
 x:0,
 y:0,
 moveTo:function(x,y){
 function moveToX(x){
 this.x = x;
 };
 function moveToY(y){
 this.y = y;
 }
 moveToX(x);
 moveToY(y);
 }
 };
 