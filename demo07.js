//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
str.split("_"); // 删除——其余分别构成数组 
str.split("_",2); //删除—— 取前两个构成数组
str.concat("_opq"); //拼接
str.substr(4,7); //截取下标为4，往后数7个
str.substring(4,7); //截取下标为4至下标为7
//切片 从第几个往后切
str.slice(2);// 删除前两个
str.slice(2,5);//保留下标为2到下标为5的
str.slice(-2); //保留从后往前数两个
str.slice(2,-2);//删除前两个和后两个

str.bold();//"<b>abc_def_ghi_jkl_mn</b>"
str.link();//"<a href="undefined">abc_def_ghi_jkl_mn</a>"
str.fontcolor("red");//"<font color="red">abc_def_ghi_jkl_mn</font>"
str.fontsize(50);//"<font size="50">abc_def_ghi_jkl_mn</font>"