//字符串比较
console.log("A" > "a"); //false
console.log("B".localeCompare("A")); //1
console.log("A".localeCompare("A")); //0
console.log("A".localeCompare("B")); //-1

//字符串链接
var a = "abc";
var b = "def";
var c = a+b;
console.log(c);//abcdef

//slice方法 从已有的数组中返回选定的元素
var str2 = "abcdef".slice(2);
var str3 = "abcdef".slice(2,5);
var str4 = "abcdef".slice(-2);
var str5 = "abcdef".slice(2,-2);
//split方法 用于把一个字符串分割成字符串数组
var arr6 = "abcdef".split("c");//返回数组
var arr7 = "abcdef".split("c",1);
var arr8 = "abcdef".split("c",2);
var str9 = "abcdef".charAt(2);//charAt某个字符串取得具体的字符
var str10 = "abcdef".charCodeAt(3);//charCodeAt() 方法可返回指定位置的字符的 Unicode 编码。这个返回值是 0 - 65535 之间的整数。
//方法 charCodeAt() 与 charAt() 方法执行的操作相似，只不过前者返回的是位于指定位置的字符的编码，而后者返回的是字符子串。
var str11 = "abcdefabcdef".indexOf("d",1);//返回某个指定的字符串值在字符串中首次出现的位置
var str12 = "abcdefabcdef".indexOf("d",4);//从第4个开始找

//substr 与 substring的区别
//substr方法 在字符串中抽取从 start 下标开始的指定数目的字符
var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);//后一个参数代表长度
console.log(str13,str14);//str13 未受到破坏   abcdefghijklmn cdefg

var str15 = str13.substring(2,5);//后一个参数代表第几个end
console.log(str13,str15);//str13 未受到破坏   abcdefghijklmn cde



//字符串变换
//String.prototype.trim( ); 移除字符串两侧的字符
//String.prototype.concat(str1?,str2?); 连接两个或多个数组
//String.prototype.toLowerCase( ); 把字符串转换为小写
//String.prototype.toLocaleLowerCase( ); 把字符串转换为小写
//与 toLowerCase() 不同的是，toLocaleLowerCase() 方法按照本地方式把字符串转换为小写。只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toLowerCase() 一样。
//String.prototype.toUpperCase( ); 把字符串转换为大写
//String.prototype.toLocaleUpperCase( ); 把字符串转换为大写
//与 toUpperCase() 不同的是，toLocaleUpperCase() 方法按照本地方式把字符串转换为大写。只有几种语言（如土耳其语）具有地方特有的大小写映射，所有该方法的返回值通常与 toUpperCase() 一样。
var str16 = "aaa".concat("bbb");//返回字符串
var str17 = "    abc def     \r\n  ".trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18 = "abcDEF".toLowerCase();
var str19 = "abcDEF".toUpperCase();

//检索和比较
//String.prototype.indexOf(searchingString,position?);
//String.prototype.lastIndexOf(searchingString,position?);
//String.prototype.localeCompare(other);
var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);//indexOf方法 返回某个指定的字符串值在字符串中首次出现的位置
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//lastIndexOf方法 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索