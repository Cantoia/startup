myApp.controller("timelineController",["$scope","twitterService","$window",
  function($scope,twitterService,$window){
	
	$scope.timeline; //array of tweets

  if(twitterService.isReady()){
    $scope.getTimeline = function(){
    	twitterService.getTimeline()
    	  .then(function(response){
    	  	$scope.timeline = response;
    	  })
    }

    $scope.getTimeline();
  }
  else{
    alert("Please login");
    $window.location.href = '#Inicio';
  }

}]);