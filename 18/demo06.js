//Array.prototype.reverse()
var arr1 = [1,2,3];
arr1.reverse();
console.log(arr1);//(3) [3, 2, 1]

//Array.prototype.sort()
var arr2 = ["banana","apple","pear","orange"];
arr2.sort();
console.log(arr2);

var arr3 = [-1,-20,7,50];
arr3.sort();
console.log(arr3);//(4) [-1, -20, 50, 7] 首数字大小排序

//sort传递的函数对象
arr3.sort(function (a,b) {return a-b;});//对于数字类型，大于0则交换，冒泡排序
//arr3.sort(function (a,b) {return a>b;});//对于布尔类型，true则交换，冒泡排序

//如果想让arr2按第二个字母排序，怎么写？
var arr2 = ["banana","apple","pear","orange"];
arr2.sort(function(a,b){return a[1]>b[1];});
console.log(arr2);


//Array.prototype.concat(arr1?,arr2?,...)
var arr4 = ["banana","apple"];
var arr5 = ["pear","orange"];
var newArray = arr4.concat(arr5);
console.log(newArray,arr4,arr5);

//Array.prototype.slice(begin?,end?)注意：不要和splice弄混了
var arr6 = [1,2,3,4,5];
var newArray = arr6.slice(2,4);
console.log(newArray,arr6);
var newArray2 = arr6.slice(2);
console.log(newArray2,arr6);

Array.prototype.join()
var arr7 = [3,4,5];
var joinReturn = arr7.join("--");//返回了个什么类型？
console.log(joinReturn,arr7);//3--4--5 (3) [3, 4, 5]
console.log(typeof joinReturn);//string
console.log([3,,,,,,5].join("*"));//3******5

//Array.prototype.indexOf(searchValue,startIndex?)
var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//输出几？
console.log(arr8.indexOf(5,3));//输出几？
console.log(arr8.indexOf(5,5));//输出几？

//Array.prototype.lastIndexOf(searchElement,startIndex?)
console.log(arr8.lastIndexOf(5));//输出几？
console.log(arr8.lastIndexOf(5,3));//输出几？
console.log(arr8.lastIndexOf(5,5));//输出几？