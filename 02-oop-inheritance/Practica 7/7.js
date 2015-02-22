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




	var Pelicula = (function(){
		
		var propiedades = {};
		var obsevers = new ObserverList;
		var play = function play(){
			console.log("reproduciendo pelicula: "+ this.nombre);
			notificar("play");
		};
		var stop = function stop(){
			console.log("Pelicula en pausa: " + this.nombre);
			notificar("stop");
		};
		
		var agregarobs = function addObserver(observer){
			obsevers.add(observer);
		};
		var removeobs = function removeObserver(observer){
			obsevers.removeAt(obsevers.indexOf(observer, 0));
		};
		var notificar = function notificar(metodo){
			var observerCount = obsevers.count();
			for(var i=0; i < observerCount; i++){
				obsevers.get(i).realizar(metodo);
		}
		};
		var set = function set(attr,value){
			propiedades[attr] = value;
		};
		var get = function get(attr){
			return propiedades[attr];
		};

		return{
				set:set,
				get:get,
				play:play,
				notificar:notificar,
				stop:stop
		};
	})();



	var Observer = function Observer(){

	}
	Observer.prototype ={
		constructor:Observer,
		realizar:function(metodo){
			if(metodo == "play")
				console.log("Esta mirando una pelicula");
			else
				console.log("la pelicula esta en pausa");
		}
	}




	//var peliculaUno = new Pelicula();



	//var peliculaDos = new Pelicula("Divergente","110","Neil Burger");

	//var peliculaTres = new Pelicula("El Hobbit","150","Peter Jackson")

	//var obs = new Observer();

	//var obslista = new ObserverList();

	//obslista.add(obs);

	//peliculaUno.addObserver(obs);
	//peliculaUno.play();


	//console.log(Pelicula.prototype);
	//console.log(peliculaUno);
