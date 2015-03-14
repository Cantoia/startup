myApp.controller("blocksController",["$scope","twitterService","$window",
  function($scope,twitterService,$window){

    $scope.blocks; // array of blocked people

  if(twitterService.isReady()){
    $scope.getBlockss = function(){
      twitterService.getBlocks()
        .then(function(response){
      	  $scope.blocks = response.users;
        })
      }
      $scope.getBlockss();
    }
  else{
  	alert("Please login");
    $window.location.href = '#Inicio';
  }

 }]);