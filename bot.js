console.log("The Succotash Is Curious.")

var Twit = require('twit');

var config = require('./config');
console.log(config);
var T = new Twit(config);
