/**
 * Created by DamianVillanueva on 8/24/2015.
 */

var isEvenNumber = function(n) {
    return n % 2 == 0;
};

var getOddNumbers = function(n) {

    var evenNumbers = [];
    var oddNumbers=[];

    for(var i = 1; i <= n * 2; i++){

        if (isEvenNumber(i)){
            //evenNumbers.push(i);
            continue;
        }



        oddNumbers.push(i);
    };

    return evenNumbers;
};

var n = 5
console.log('First', n, 'Odd numbers are', getOddNumbers(n));
// console.log('First', n, 'Even numbers are', getEvenNumbers(n));



