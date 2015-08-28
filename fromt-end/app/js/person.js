/**
 * Created by DamianVillanueva on 8/27/2015.
 */

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


    /**
     * Get Age
     * @returns {*}
     */

    this.getAge=function(){
        return _age;

    };

    /**
     * Set Age
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
    };

};

Person.prototype.printBio= function (){
    var _doSomethingPrivate =function(){
        console.log('This is a private method');
    };
    console.log('Hello, my name is ', this.name,'and I am ', this.getAge(), 'years old');
    _doSomethingPrivate();
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