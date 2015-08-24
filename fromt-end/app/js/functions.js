/**
 * Created by DamianVillanueva on 8/24/2015.
 */
/**
 *
 * @param numberA
 * @param numberB
 * @param callback, function
 */

var doOperation= function (numberA,numberB,callback) {
    callback();
    callback();
    callback();
    return  numberA+numberB;
};

/*var sayHello=function(){
    console.log('Hello!');
};*/
/**
 * function anonymous is invoque
 */
doOperation(1,2,function(){
    console.log('Hello!');
});
/*sayHello();
sayHello();
sayHello();*/


/**
 * function anonimous and auto-executable
 */

(function(){
    console.log('Hello!');
})();
/**
 *
 */
/*
var sayHello=function(){
    if(!name)
        name='world';
    console.log('Hello', name);
};
say('Hello');
*/
/**
 * anonymous function
 */
(function(name){
    if(!name)
        name='world';
    console.log('Hello', name);
})('pepe');

