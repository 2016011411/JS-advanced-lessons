window.onload = function(e){
    // console.log(e.target);
    // console.log(this);
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    function clickHandler(e){
        console.log(e.target);
        //console.log(e.clientX,e.clientY,e.ctrlKey);
        // console.log(e.type,e.target);
        // console.log(e.target,this);
        // console.log(e.hasOwnProperty("target"));
        // for(var k in e){
        //     console.log(k,e[k]);
        // }
        // for(var k in e.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__){
        //     console.log(k);
        // }
        // for(var k in e.__proto__.__proto__.__proto__){
        //     console.log(k);
        }
        
        // div1.onclick = clickHandler;
        // div2.onclick = clickHandler;
        //div1.addEventListener("click",clickHandler);
        //div1.removeEventListener("click",clickHandler);
    }


// function div2click(e){
//     console.log(e.target);
// }