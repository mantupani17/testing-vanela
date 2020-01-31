// Immediately Invoked Function Expression - IIFE
var globalVar = 100;
(function () {
    //write your js code here
    console.log(globalVar)
    // example closure
    var fun1 = function(name){
        this.innerFun = ()=>{
            console.log(name)
        }
    }
    var x = new fun1('mantu pani');
    x.innerFun()

    // variable hoisting
    y = 25 ;
    console.log(y)
    var y ;
    console.log(display);
    var display;
    function display(){
        console.log('hllllll')
    }
})(globalVar);

