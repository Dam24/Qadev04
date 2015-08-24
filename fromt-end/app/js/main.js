/**
 * Created by DamianVillanueva on 8/10/2015.
 */
console.log('this is a JS COde from a JS file')

var sayHello = function() {

    var message = 'Hello world!!!';
    console.log(message);
};

sayHello();
/**
 *
 * @param name
 * @param age
 * @constructor
 */

var Person=function(name, age){
    this.name=name;
    this.age=age;

    /**
     * Method description ...
     */

    this.sayHello =  function(name){
        console.log(arguments);
        console.log('Hello',name,', my name is', this.name);
    };

};


var paco=new Person('Paco',12);
var hugo = new Person('Hugo',11);

var age='';
var calculateAge =function(bornYear){
    var age = 2015-bornYear;
    return age;
};




var calculateNumber=function (number){

};