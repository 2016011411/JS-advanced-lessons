console.log(a);//undefined
var a = 1;
console.log(a);//1
//上边代码等价如下 解析器眼中的代码
var a;
console.log(a);
a = 1;
console.log(a);

console.log(a,b);//undefined undefined
var b = 23;
console.log(a,b);//undefined 23
var a = b;
console.log(a,b);//23 23

console.log(obj1,obj2);//undefined undefined
var obj1 = {x:23};
console.log(obj1,obj2);//{x: 23} undefined
var obj2 = obj1;
console.log(obj1,obj2);//{x: 23} {x: 23}
obj2.x =25;
console.log(obj1,obj2);//{x: 25} {x: 25}

foo();//f_2
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
//上边代码等价如下 解析器眼中的代码
function foo(){
    console.log("f_1");
}
function foo(){
    console.log("f_2");
}
foo();//f_2

foo();
var foo = function(){
    console.log("foo");
};//报错

console.log(foo);//undefined
var foo = function(){
    console.log("foo");//foo
};
foo();


AA();
function AA(){
    console.log("AA_1");//AA_1
}
var AA = function AA(){
    console.log("AA_2");//AA_2
};
AA();

//上边代码等价如下 解析器眼中的代码
function AA(){
    console.log("AA_1");//AA_1
}
AA();
AA = function AA(){
    console.log("AA_2");//AA_2
};
AA();