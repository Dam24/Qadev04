/**
 * Created by DamianVillanueva on 8/24/2015.
 */

 var getFactorial = function(n) {

 var factorial = 1;

 for(var i = 1; i <= n; i++) {
 factorial *= i;
 };

 return factorial;
 };
 var x = 5;
 console.log('The factorial of', x, 'is', getFactorial(x));