/**
 * Created by DamianVillanueva on 8/21/2015.
 */




/*
var numberCapicua=function () {

    this.getFirstCapicua=function(offset,limit)
    {
        for(var i=offset;i<=limit;i++){
            if(isCapicua(i)){
                return i;
            }
        }
       // return ;
    };
    this.isCapicua=function(number){
        var revNumber=parseInt(number.toString.split('').reverse().join(''));
        return number == revNumber;
    };
}


var capicua =new numberCapicua();
capicua.getFirstCapicua(50,100);

*/



/**
 * Returns the first capicua number from a range
 * @param offset
 * @param limit
 * @returns {number}
 */
var getFirstCapicua = function(offset, limit){

    for (var i = offset; i <= limit; i++) {

        if (isCapicua(i)){
            break;
        }
    };

    return i;
};
var isCapicua = function (n) {
    return n == Number.parseInt(n.toString().split('').reverse().join(''));
};
var initRange = 20;
var endRange = 50;
console.log('First capicua between', initRange, 'and', endRange, 'is',
    getFirstCapicua(initRange, endRange));








