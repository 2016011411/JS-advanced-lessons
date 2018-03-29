function foo(){}
console.log(foo); //function foo(){}
console.log(typeof foo); //function
console.log(foo instanceof Object); //true
console.log(foo instanceof Function); //true
console.log(foo === window.foo); //true

console.log(typeof Function);//function
console.log(typeof Array);	//function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object

console.log(typeof new Function());// function or object
console.log(typeof new Array()); // function or object
console.log(typeof new Date());	 // function or object

console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true

console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
//先实例化一个Date对象 再调用
console.log(Date instanceof Function);//true
console.log(Date instanceof Object);//true
//Math直接可以拿来用
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true

console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);//true

