var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);//a: 1  x: 1
    x = 2;//第二步
    console.trace("a:",a," x:",x);//第三步 a: 1  x: 2
}

console.trace("a:",a);
foo(a);//第一步 a:1
console.trace("a:",a); //第四步  a：1

var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);//obj.x: 1  o.x: 1
    o.x = 3;//第二步
    console.trace("obj.x :",obj.x," o.x :",o.x);//第三步 obj.x: 3  o.x: 3
}

console.trace("obj.x :",obj.x);//obj.x: 1
fee(obj);//第一步
console.trace("obj.x :",obj.x);//第四步  obj.x: 3

document.onclick = function () {//测试Event Listener Breakpoints
    alert("click");
    //var body =  document.getElementsByName("body");
};