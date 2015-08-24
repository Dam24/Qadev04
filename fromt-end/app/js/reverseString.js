/**
 * Created by DamianVillanueva on 8/24/2015.
 */

/**
 * Return the Reverse number
 * @param str
 * @returns {string}
 */
    /*
var getReverseString =function(str){
   var revString='';

    for(var i=str.length-1;i>=0;i--){
        //revString[i]=
            revString +=str[i];
    };




    return revString;

};

var str='Hello';
console.log(str, ', reverse is: ', getReverseString(str));
*/

var getTruncate=function(str,id){
  var string='';
    for(var i=0; i<id;i++){
        string[i]=str.length[i];
    }
    return string;
};

var str='Hello';
console.log(str, ', Truncate string is: ', getTruncate(str,3));

