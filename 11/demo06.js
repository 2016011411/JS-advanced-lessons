(function max(x,y){
    console.log("the max is",x>y?x:y);
}(2,3));

(function (x,y){ 
    console.log("the min is",x<y?x:y);
})(2,3);

var i = function(){
    return 10;
}(); //i为10

(function() {
    console.log("111");
})(); //没有分号的话会报错
(function() {
    console.log("222");
})() // 立即执行表达式需要加分号


true && function(a,b){
    return a>b?a:b;
}(5,9);//返回9

0 && function(a,b){
    return a>b?a:b;
}(5,9);//返回0

//注意“！”
!function(x,y){
    return x==y?true:false; // === 返回true
}("5",5);//返回false