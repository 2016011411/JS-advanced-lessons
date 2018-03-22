//通过&&和||的组合实现(短路原则)
var a = 76;
console.log((a>90&&"优")||(a>80&&"良")||(a>60&&"及格")||(a<60&&"不及格"));

var a = 96;
console.log((a>90&&"优")||(a>80&&"良")||(a>60&&"及格")||(a<60&&"不及格"));



var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}