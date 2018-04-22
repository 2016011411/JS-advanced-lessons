var obj = {x:5};
Object.defineProperty(obj,"y",{
    configurable:false,
    writable:false,
    enumerable:true,
    value:6
});
Object.defineProperty(obj,"z",{
    configurable:false,
    value:7
});
var xDes = Object.getOwnPropertyDescriptor(obj,"x");
var yDes = Object.getOwnPropertyDescriptor(obj,"y");
var zDes = Object.getOwnPropertyDescriptor(obj,"z");
console.log(xDes,yDes,zDes);
//{value: 5, writable: true, enumerable: true, configurable: true} 
//{value: 6, writable: false, enumerable: true, configurable: false} 
//{value: 7, writable: false, enumerable: false, configurable: false}