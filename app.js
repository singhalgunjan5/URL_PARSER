const toTextString = require("to-text-string");
var sls = require('single-line-string');
var Urls = require('my-name-is-url');
let text=sls `! We are also organising a hackathon on the  
19th :https://solana-hackday-delhi.devfolio.co`;
const result = toTextString(text);
console.log( Urls(result).get());