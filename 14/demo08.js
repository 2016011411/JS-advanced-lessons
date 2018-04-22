var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:false,//改成true会如何
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出Mike
person.name = "Lucy";
console.log(person.name);//输出Mike
delete person.name;
console.log(person.name);//输出Mike

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:false,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出Mike
person.name = "Lucy";
console.log(person.name);//输出Lucy
delete person.name;
console.log(person.name);//输出Lucy

var person = {name:"Jack"};
Object.defineProperty(person,"name",{
    writable:true,
    configurable:true,//改成true会如何
    enumerable:true,
    value:"Mike"
});
console.log(person.name);//输出Mike
person.name = "Lucy";
console.log(person.name);//输出Lucy
delete person.name;
console.log(person.name);//输出undefined