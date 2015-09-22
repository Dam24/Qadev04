/**
 * Created by DamianVillanueva on 8/14/2015.
 */

/**
 *
 * @constructor
 */

var Calculate=function (){
//this.number=number;
//var sum=0;
    this.CalculateNumbers=function(){
        if(arguments.length==0)
        {
            throw "Cannot do the evaluation without params";
        }
        //var numbers=arguments;
        //var pos=0;
        //console.log('The sum number is:', this.getSum(arguments, arguments.length-1));
        console.log('The sum number is:', this.getSum(arguments));
        console.log('The max number is:', this.getMax(arguments));
        console.log('The min number is:', this.getMin(arguments));
        console.log('The Average is:', this.getSum(arguments)/arguments.length);
    };

    /**
     *
     * @param numbers
     * @param pos
     * @returns {*}
     */
    this.getSum=function(numbers,pos )
    {
        if(pos===undefined)
        {
            pos=numbers.length - 1;
        }
       // var currentVal=numbers[pos];//[numbers.length - 1]
        if(pos==0)
        {
            //return currentVal;
            return numbers[pos];
        }
        else
        //return currentVal + this.getSum(numbers,pos-1);
        return numbers[pos] + this.getSum(numbers,pos-1);
    };
    /**
     *
     * @param numbers
     * @param pos: array index
     * @returns {the number max in the array}
     */

    this.getMax=function(numbers, pos){

        if(pos===undefined)
        {
            pos=numbers.length - 1;
            max=numbers[pos];
        }
        if(max===undefined ||numbers[pos]>max){
            max=numbers[pos];
        }
        if(pos==0)
        {
            return max;
        }
        else
        {
            return this.getMax(numbers,pos-1,max);//max recursividad
        }
    };

    this.getMin=function(numbers, pos){

        if(pos===undefined)
        {
            pos=numbers.length - 1;
            min=numbers[pos];
        }
        if(min===undefined ||numbers[pos]<min){
            min=numbers[pos];
        }
        if(pos==0)
        {
            return min;
        }
        else
        {
            return this.getMin(numbers,pos-1,min);//max recursividad
        }
    };
//


};



var calculate =new Calculate();
//Calculate.CalculateNumbers(1,2);
calculate.CalculateNumbers(1,2,3);

//tarea 1
//calculate.getsum(1,2,3);
//calculate.getmax(1,2,3);
//calculate.getmin(1,2,3);
//calculate.getAvg(1,2,3);