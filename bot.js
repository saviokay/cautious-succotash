//console.log("The Succotash Is Curious.")

var Twit = require('twit');

var config = require('./config');
console.log(config);
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
    console.log('"'+tweets[i].text+'"' );
    }
};

function tweetIt() {
	T.post('statuses/update', tweet, tweeted);

	function tweeted(err, data, response) {
	  if (err) {
	  	console.log("Something went wrong!");
		console.log(err);
        console.log(err);
	  } else {
	    console.log("It worked!, Move on.");
	  }
	}

    // Setting up a user stream
    var stream = T.stream('user');

    // To ensure we don't tweet ourselves, we must get our user data.
    var my_screen_name = null;

    var get_skip = {
        skip_status: true
    }

    function getdone(err, data, response)
    if (err) {
      console.log("Something went wrong!");
      console.log(err);
    } else {
      console.log("It worked!, Move on.");
    }
  }

    T.get('account/verify_credentials', get_skip, getdone {
      my_screen_name = data.screen_name;
      console.log('Using account of ' + my_screen_name+ ' Thank you.');
      console.log('Using account of ' + my_screen_name+ ' Thank you.');
    });

    // Anytime someone follows me
    stream.on('follow', followed);

    function followed(eventMsg) {
      console.log("Follow event!");
      var name = eventMsg.source.name;
      var screenName = eventMsg.source.screen_name;
      /* If you follow someone, follow bot works again.
         It tweets like '.@yourTwitterName do you like rainbows'
         So, to prevent this, we make an if clause
         using your twitter screenName
         */
      if (screenName !== my_screen_name) {
        tweetIt('.@' + screenName + ' Thanks, Do you think this is my efforst are worth it.');
  }
}
