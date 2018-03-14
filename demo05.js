    // 值传递
    (function () {

    var str_a = "Hello World";
    function fun_a(arg){
        console.log(arg); 
        arg = "Hai";
        console.log(str_a,arg); 
    };
    fun_a(str_a);
    console.log(str_a);

    // 引用传递
    var obj_a = {value:1};
    function fun_a(arg){
        arg.value=3;
    };
    fun_a(obj_a);
    console.log(obj_a);
    
    function fun_b(arg){
        arg={value:2};
    };
    fun_b(obj_a);
    console.log(obj_a);
    
    }());