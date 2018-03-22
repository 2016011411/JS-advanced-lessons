function max(a,b){
    return a>b?a:b;
}
max(2,3);//3

var max = function (a,b){ 
    return a>b?a:b;
};
max(2,3);//3

var foo = function max(a,b){
    console.trace();//向Web控制台输出一个堆栈跟踪.
                    //在页面console文档中查看堆栈跟踪的详细介绍和示例.
    return console.log(a>b?a:b);
};
foo(2,3);

foo = function min(a,b){
    console.trace();
    return console.log(a>b?b:a);
};
foo(2,3);



var max = new Function("a","b","return a>b?a:b");
max(2,3);//3