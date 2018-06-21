 var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]

var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); // 无输出
}
Object.getOwnPropertyNames(obj);// []
Object.getOwnPropertySymbols(obj);// [Symbol(foo)]

var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
console.log(s1 === s2); // true

console.log(Symbol.for("bar") === Symbol.for("bar"));// true
console.log(Symbol("bar") === Symbol("bar"));// false
console.log(Symbol.for("bar") === Symbol("bar"));// false

//Symbol.keyFor方法返回一个已登记的Symbol类型值的key。
var s1 = Symbol.for("foo");
console.log(Symbol.keyFor(s1)); // "foo"
var s2 = Symbol("foo");
console.log(Symbol.keyFor(s2)); // undefined

//思考：
var s3 = Symbol(Symbol.keyFor(s1));
console.log(s1 === s3);//false
console.log(s2 === s3);//false
var s4 = Symbol.for(Symbol.keyFor(s1));
console.log(s1 === s4);//true
console.log(s2 === s4);//false
