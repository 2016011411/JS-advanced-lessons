var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    console.log(a,b,c);//100 20 200  d访问不到
    function bar() {
        //bar局部作用域
        var a = 500,
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
console.log(a,b);//10 20  cd访问不到


var a = 10,
    b = 20;
function fn() {
    //fn局部作用域
    var a = 100,
        c = 200;
    //console.log(a,b,c,d);
    function bar() {
        //bar局部作用域
        var a = 500;//逗号改成分号 d就是全局变量
            d = 600;
        console.log(a,b,c,d);
    }
    bar();
}
fn();
//console.log(a,b,c,d);