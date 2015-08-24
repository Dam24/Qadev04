/**
 * Created by DamianVillanueva on 8/20/2015.
 */

var printFormattedDate=function()
{
    /*var nowDate = new Date();

    var days=['sun','mo','tu','','','Friday','Saturday'];
    var hour=nowDate.getHours();
    var srtHOur=hour>12 ? (hour-12)+ 'PM': hour+'AM';

    console.log('Today is: ', days[nowDate.getDay()]);
    console.log('Current time is: ', hour, ':' );
*/



    var now = new Date();
    var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    var hour = now.getHours() > 12 ? (now.getHours() - 12) + " PM" : now.getHours() + " AM";

    console.log('Today is:', days[now.getDay()]);
    console.log('Current time is:', hour, ':', now.getMinutes(), ':', now.getSeconds());


};

console.log(printFormattedDate())








