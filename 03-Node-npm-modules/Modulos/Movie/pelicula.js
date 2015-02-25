module.exports = function(name, duration){
    this.name = name;
    this.duration = duration;
  }
  module.exports.prototype = {
   constructor:module.exports,
    play:function(){
	  console.log("reproduciendo pelicula: "+this.name);
	  //this.notificar("play");
	},
	stop:function(){
	  console.log("Pelicula en pausa: " +this.name);
	  //this.notificar("stop");
	},
	set:function(attr,value){
	  this[attr] = value;
	},
	get:function(attr){
	  return this[attr];
	},
	/*addObserver:function(observer){
  	  this.obsevers.add(observer);
	},
	removeObserver:function(observer){
	  this.obsevers.removeAt(this.obsevers.indexOf(observer, 0));
	},
	notificar:function(metodo){
	  var observerCount = this.obsevers.count();
	  for(var i=0; i < observerCount; i++){
	    this.obsevers.get(i).realizar(metodo);
	  }
	}*/
  }  

 