console.log(2>1&&4<5);//true
console.log(true&&(!2));//false
console.log(false&&("2" == 2));//false
console.log(false&&false);//false

console.log(2>1||4<5);//true
console.log(true||(!2));//true
console.log(false||("2" == 2));//true
console.log(false||false);//false

//当逻辑运算符&&和||两侧的操作数不是布尔类型时
// 首先将左操作数转换成布尔类型
// 对转换后的左操作数进行逻辑判断（true or false）
// 根据短路原则返回原始左操作数或原始右操作数
//短路原则（忽略对右操作数的判断）
// 对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则  直接返回原始左操作数
// 对于||，转换后的左操作数若为true，则直接返回原始左操作数，若为false则直  接返回原始右操作数
// 通过短路原则，可以用&&和| |来实现复杂的条件语句来代替if-else