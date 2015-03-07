function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination; 
}

var ObserverList = function ObserverList(){
  this.observerList = [];
}
  ObserverList.prototype = {
    constructor:ObserverList,
	  add:function(obj){
        return this.observerList.push(obj);
	  },
	  count:function(){
		return this.observerList.length;
	  },
	  get:function(index){
		if(index > -1 && index < this.observerList.length){
		return this.observerList[index];
		}
	  },
	  indexOf:function(obj,startIndex){
		while(i < this.observerList.length){
		  if(this.observerList[i] === obj){
		    return i;
		  }
		i++;
		}
		return -1;
	  },
	  removeAt:function(index){
		this.observerList.splice(index, 1);
	  }
	}

  var Pelicula = function Pelicula(nombre, duracion, director){
    this.nombre = nombre;
    this.duracion = duracion;
    this.director = director;
    this.obsevers = new ObserverList();
    this._actores = [];
  }
  Pelicula.prototype = {
   constructor:Pelicula,
    play:function(){
	  console.log("reproduciendo pelicula: "+this.nombre);
	  this.notificar("play");
	},
	stop:function(){
	  console.log("Pelicula en pausa: " +this.nombre);
	  this.notificar("stop");
	},
	set:function(attr,value){
	  this[attr] = value;
	},
	get:function(attr){
	  return this[attr];
	},
	addObserver:function(observer){
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
	},
	agregarActor:function(actor){
		this._actores.push(actor);
	}
  }

  var DownloableMovie = function DownloableMovie(){
    Pelicula.call(this);
	  this.dmovie = function dmovie(){
	    console.log("esta descargando una pelicula");
	  }
	}

  DownloableMovie.prototype = Object.create(Pelicula.prototype);

  var Observer = function Observer(){}
    Observer.prototype ={
     constructor:Observer,
	   realizar:function(metodo){
	     if(metodo == "play")
			console.log("Esta mirando una pelicula");
		 else
			console.log("la pelicula esta en pausa");
	   }
	}

  var Social = {
    share: function(friend){
      return console.log("compartiendo pelicula: " +this.nombre +" con mi amigo " +friend)
    },
    like: function(){
    	return console.log("Me gusta la pelicula: " +this.nombre);
    }
  };

  var Actor = function Actor(nombre, edad){
  	this.nombre = nombre;
  	this.edad = edad;
  }

  extend(Pelicula.prototype, Social)

  var peliculaUno =new Pelicula("Los Indestructibles","130","Sylvester Stallone");

  var peliculaDos = new Pelicula("Divergente","110","Neil Burger");

  var peliculaTres = new Pelicula("El Hobbit","150","Peter Jackson")

  var obs = new Observer();

  var obslista = new ObserverList();

  var act1 = new Actor("Arnold Schwarzenegger","65"); 

  var act2 = new Actor("Chuck Norris","57"); 

  var act3 = new Actor("Silvester Stallone","60"); 

  peliculaUno.agregarActor(act1);

  peliculaUno.agregarActor(act2);

  peliculaUno.agregarActor(act3);

  obslista.add(obs);

  peliculaUno.addObserver(obs);

  peliculaUno.play();
 



 