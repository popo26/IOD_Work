// https://www.npmjs.com/package/sentiment

var Sentiment = require('sentiment');
var sentiment = new Sentiment();

function analyzeSentence(sentence){
    var result = sentiment.analyze(sentence);
    return result;
}

console.log(analyzeSentence('I love dogs'));