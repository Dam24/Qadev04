/**
 * Created by DamianVillanueva on 8/20/2015.
 */
/**
 *
 * @param par: content the word
 * @returns {Number}
 */
var countWords=function(par)
{
    var words =par.split('');
    return words.length;

}


var word="Hello Word, Im Damian";

console.log('Number of words in: ',word, '= ',countWords(word));