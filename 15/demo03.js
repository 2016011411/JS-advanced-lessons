//js对象的属性访问链（自有属性和继承属性）
var proObj = {
    z:3
};
var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;
console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3
console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

obj.z = 5;

console.log(obj.hasOwnProperty("z"));//true
console.log(obj.z);//5
console.log(proObj.z);//3

obj.z = 8;
console.log(obj.z);//8

delete obj.z;//true
console.log(obj.z);//3

delete obj.z;//true
console.log(obj.z);//3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了 undefined
