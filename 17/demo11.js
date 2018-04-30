function Foo() {}
var f = new Foo();
console.log(f.constructor.name);

function Constr(name) {
    this.name = name;
}
var x = new Constr("Jack");
var y = new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);

function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);

function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);//123 456
    };
}
var a = new A(123);
console.log(a.publicId);//123
console.log(a.privateId);//undefined
a.getId();



function Person(name){
	this.name = name;
}
Person.prototype.getName = function(){}
// Person.prototype = { //测试如果更改了Person.prototype输出又会变成什么?
// 	getName:function(){}
// }
var p = new Person("jack");
console.log(p.__proto__ === Person.prototype);//true
console.log(p.__proto__ === p.constructor.prototype);//true
console.log(Object.prototype === p.constructor.prototype);//false
console.log(({getName:function(){}}).__proto__ === p.constructor.prototype);//false

function A(){
    this.a = 10;
    this.af = function(){console.log(this.a);}
}
var a = new A();

function B(){
    A.call(this);
    this.b = 20;
    this.bf = function(){console.log(this.a);}
}
B.prototype.__proto__ = A.prototype;
var b = new B();
