myApp.service("Storage",["$window",
  function($window){
    var movies = [];

    if(!$window.localStorage){
      alert("No tienes localStorage activado");
    }
    else{
      movies = $window.localStorage.getItem("Movies");
    }
    
    this.saveM = function(Movie){
      if(movies == null){
      	movies = [];
      }
      else{
        movies = angular.fromJson(movies);	
      }
      movies.push(Movie);
      moviesString = JSON.stringify(movies);
      $window.localStorage.setItem("Movies", moviesString);
    }

    this.list = function(){
    	return angular.fromJson($window.localStorage.getItem("Movies"));
    }

    this.deleteM = function(index){
      movies = angular.fromJson(movies);
      movies.splice(index,1);
      moviesString = JSON.stringify(movies);
      $window.localStorage.setItem("Movies", moviesString);
    }

    this.editM = function(index,m1){
      movies = angular.fromJson(movies);
      movies.splice(index,1,m1);
      moviesString = JSON.stringify(movies);
      $window.localStorage.setItem("Movies", moviesString);
    }

  }
]);