//console.log("The Succotash Is Curious.")

var Twit = require('twit');

var config = require('./config');
//console.log(config);
var T = new Twit(config);
var params = {
    q: 'succotash',
    count: 2};

//
//  search twitter for all tweets containing the word 'banana' since July 11, 2011
//
T.get('search/tweets', params, gotData);

function gotData(err, data, response){
    var tweets = data.statuses;
    for (var i = 0;i < tweets.length; i++){
    console.log('"'+tweets[i].text+'"' );
    console.log("----------------------");
    }
};
//
//  tweet 'hello world!'
//
var tweet = {
    status: 'Suffering Succotash'
            }

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  console.log(data)
}
