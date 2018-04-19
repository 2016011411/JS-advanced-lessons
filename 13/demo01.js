var obj = {
    num:10,
    str:"Hi",
    show:function(){
        console.log(this.str);//this指向obj
    }
};
console.log(obj.num);//10
console.log(obj.str);//Hi
obj.show();			 //Hi