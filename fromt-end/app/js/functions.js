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

/**
 * Constructor for person
 * @param name
 * @param age
 * @constructor
 */

var Person=function (name, age){

    this.name=name;
    //this.age=age;
    var _age=age;

    this.printBio= function (){
        console.log('Hello, my name is ', this.name,'and I am ', _age, 'years old');
        _doSomethingPrivate();
    };
    /**
     * Get
     * @returns {*}
     */

    this.getAge=function(){
        return _age;

    };

    /**
     * Set
     * @param age
     * @returns {*}
     */
    this.setAge=function(age){
        _age=age;
        return _age;
    };
    // private
    /**
     *
     * @private
     */
    var _doSomethingPrivate =function(){
        console.log('This is a private method');
    }

};
//method static
Person.sayHello=function(){
    console.log('Say Hello');
};

//Test Person class
var pepe=new Person('Pepe', 23);
pepe.printBio();
//pepe._doSomethingPrivate();//error
//_doSomethingPrivate();//error
//Method Static
Person.sayHello();