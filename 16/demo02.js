function thisTest() {
    "use strict"
    console.log(this);
}
thisTest();

//"use strict"
function isStrictMode() {
    return this == undefined?true:false;
}
isStrictMode();