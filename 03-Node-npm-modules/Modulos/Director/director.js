module.exports =  function(name){
  this.name = name;
 }

 module.exports.prototype = {
  constructor:module.exports,
  speak:function(){
  	alert("Director says: " +this.quotes);
  },
  set:function(attr,value){
    this[attr] = value;
  },
  get:function(attr){
    return this[attr];
  }
 }
