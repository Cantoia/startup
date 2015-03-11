myApp.controller("mainController",["$scope","twitterService","$q",
 function($scope, twitterService, $q){
	 
   //Preguntar porque no lo toma

	$scope.username; //name of the user loged into twitter  
  
    function getName(){
      twitterService.getUser()
       .then(function(response){
         $scope.username = response.name;
      })
    }

    $scope.connect = function(){
    	var promise = twitterService.connect();
    	promise.then(getName);	
    }

}]);