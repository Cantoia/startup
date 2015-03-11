//Falta el 2, de agregar un detalle a la pelicula !

myApp.controller("MoviesCtrl",["$scope","Storage",
  function($scope, Storage){
  
   var Movie = function Movie(data) {
    data = data || {};
    this.name = data.name;
    this.year = data.year;
    this.description = data.description;
    this.genre = data.genre;
  };
  /* Add movies to list without storage
  $scope.movies = [
    new Movie({name:"The lord of the Ring", year:"2010", description:"A good movie", genre:"action"}),
    new Movie({name:"The lord of the Ring 1", year:"2011", description:"A good movie", genre:"action"}),
    new Movie({name:"The lord of the Ring 2", year:"2012", description:"A good movie", genre:"action"}),
    new Movie({name:"The lord of the Ring 3", year:"2013", description:"A good movie", genre:"action"})
  ];
  */
  $scope.movies = Storage.list();
  console.log($scope.movies);

  $scope.clearTxt = function(){
    $scope.movie_name = "",
    $scope.movie_year = "",
    $scope.movie_description = "",
    $scope.movie_genre = ""
  };
  /* Delete without Storage
  $scope.deleteMovie = function(index){
    $scope.movies.splice(index,1);
  };
   Adding without Storage
  $scope.addMovie = function(){
  	$scope.movies.push(
      new Movie({name:$scope.movie_name, year:$scope.movie_year, description:$scope.movie_description, genre:$scope.movie_genre})
  	)
    $scope.clearTxt();
  };
  */
  //Add with localStore
  $scope.addMovie = function(){
    var m1 = new Movie({name:$scope.movie_name, year:$scope.movie_year, description:$scope.movie_description, genre:$scope.movie_genre});
    Storage.saveM(m1);
    $scope.clearTxt();
    $scope.movies = Storage.list();
  }
  //Delete with Storage
  $scope.deleteMovie = function(index){
    Storage.deleteM(index);
    $scope.movies = Storage.list();
  }
  /* Edit without storage
  $scope.edit1Movie = function(index){
    var m1 = new Movie({name:$scope.movie_name, year:$scope.movie_year, description:$scope.movie_description, genre:$scope.movie_genre});
    $scope.movies.splice(index, 1, m1)
    $scope.clearTxt();
  };
  */
  //Edit with Storage
  $scope.$edit1Movie = function(index){
    var m1 = new Movie({name:$scope.movie_name, year:$scope.movie_year, description:$scope.movie_description, genre:$scope.movie_genre});
    Storage.editM(index,m1);
    $scope.movies = Storage.list();
  }

}]);