myApp.controller("mainController",["$scope","twitterService",
 function($scope, twitterService){

  if(twitterService.isReady()){
   $scope.btnLogin = false;
   $scope.btnLogout = true;
  }
  else{
   $scope.btnLogout = false;
   $scope.btnLogin = true;
  }

    $scope.connect = function(){
    	var promise = twitterService.connect();
    	promise.then(getName);
    }

    function getName(){
      twitterService.getUser()
       .then(function(response){
         $scope.name ="Wellcome: "+response.name;
         $scope.btnLogout = true;
         $scope.btnLogin = false;
      })
    }

    
    $scope.disconnect = function(){
      twitterService.clearCache();
      $scope.name = "See you soon";
      $scope.btnLogout = false;
      $scope.btnLogin = true;
    }

}]);