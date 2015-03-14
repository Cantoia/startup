myApp.controller("trendsController",["$scope","twitterService","$window",
 function($scope,twitterService,$window){
	
  $scope.latitude;
  $scope.longitude;
  $scope.woeid;
  $scope.trends;

 if(twitterService.isReady()){
 $scope.Update = function(){ 
  function getLocation() {
    if ($window.navigator.geolocation) {
      $window.navigator.geolocation.getCurrentPosition(getPosition);
    } 
    else {
      alert("This browser does not support geolocation");
    }
  }

  function getPosition(position) {
    $scope.latitude = position.coords.latitude; 
    $scope.longitude = position.coords.longitude;
    getWoeid();
  }

  getLocation();

  function getWoeid(){
  	twitterService.getWoeid($scope.latitude, $scope.longitude)
    	.then(function(response){
    		$scope.woeid = response[0].woeid;
    		getNearestTrends();
    	})
   }

   function getNearestTrends(){
   	twitterService.getTrends($scope.woeid)
   	  .then(function(response){
   	  	$scope.trends = response[0].trends;
   	  })
   }
  }
  $scope.Update();
 }
 else{
  alert("Please login");
  $window.location.href = '#Inicio';
 }


}]);