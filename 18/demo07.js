//Array.prototype.forEach() //注意并不返回新的数组
var arr1= [2,5,8];
arr1.forEach(function (a) {
    if(a>3){
        console.log(a,"大于3");
    }else {
        console.log(a,"不大于3");
    }
});
console.log(arr1);//(3) [2, 5, 8]

var arr1= [2,5,8];
var arr2= [1,6,7];
var arr3= [];
arr1.forEach(function (a,i) {
    arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);//(3) [2, 6, 8]

// Array.prototype.every(callback,thisValue?) //返回一个布尔类型 若有不满足的将不再进行后续判断直接返回false
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);//打开此行，不会输出8
    return a%2===0;
});
console.log(returnValue);
//练习：验证一个百位数，个、十、百 每一位上的数相加可以除尽3的话，则这个百位数就能整除3

// Array.prototype.some(callback,thisValue?)//返回一个布尔类型 若有一部分满足的将不再进行后续判断，直接返回true
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {//判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    console.log(a);//打开此行，只输出了2
    return a%2===0;
});
console.log(returnValue);


// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {//产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);

// Array.prototype.reduce(element,initialValue?) //从左向右迭代

function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));


function printArgs(prev,cur,i) {
    console.log("prev",prev,",cur:",cur,",i:",i);
    return prev+cur;
}
var arr4 = ["a","b","c","d"];
console.log(arr4.reduce(printArgs));
console.log(arr4.reduce(printArgs,"x"));
console.log(arr4.reduceRight(printArgs));
console.log(arr4.reduceRight(printArgs,"x"));


var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
console.log(flattened);

var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }