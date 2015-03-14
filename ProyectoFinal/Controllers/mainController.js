myApp.controller("mainController",["$scope","twitterService",
 function($scope, twitterService){

   function getName(){
      twitterService.getUser()
       .then(function(response){
         $scope.name ="Wellcome: "+response.name;
      })
    }

    $scope.connect = function(){
    	var promise = twitterService.connect();
    	promise.then(getName);
    }
    
    $scope.disconnect = function(){
      twitterService.clearCache();
      $scope.name = "";
    }

}]);