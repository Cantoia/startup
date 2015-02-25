var $ = require ("C:/startup/03-Node-npm-modules/Modulos/Jquery/node_modules/jquery/dist/jquery.js");
var Movie = require ('C:/startup/03-Node-npm-modules/Modulos/Movie/pelicula.js');
var Director = require('C:/startup/03-Node-npm-modules/Modulos/Director/director.js');

$(document).ready (function(){
  var alien = new Movie();
  var ridleyScott = new Director("Ridley Scott");
  ridleyScott.set("quotes", ["Cast is everything.', 'Do what ..."]);
  alien.set("director", ridleyScott);
  //alien.get("director").speak();
  var $div = $("<div>");
  var $p = $("<p>");
  $p.text(ridleyScott.quotes);
  $p.appendTo($div);
  $("#div1").append($div);
});