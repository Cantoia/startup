myApp.service("Storage",["$window",
  function($window){
    var movies;

    if(!$window.localStorage){
      alert("No esta soportado");
    }
    else{
      movies = angular.fromJson($window.localStorage.getItem("Movies")) || [];
    }
    //Fijarse el tema de responsabilidades... se tendria que poner mas funcionalidad en el controller
    
    this.saveM = function(Movie){
      movies.push(Movie);
      moviesString = JSON.stringify(movies);
      $window.localStorage.setItem("Movies", moviesString);
    }

    this.list = function(){
    	return angular.fromJson($window.localStorage.getItem("Movies"));
    }

    this.deleteM = function(index){
      movies.splice(index,1);
      moviesString = JSON.stringify(movies);
      $window.localStorage.setItem("Movies", moviesString);
    }

    this.editM = function(index,m1){
      movies.splice(index,1,m1);
      moviesString = JSON.stringify(movies);
      $window.localStorage.setItem("Movies", moviesString);
    }

  }
]);