myApp.controller("timelineController",["$scope","twitterService",
  function($scope,twitterService){
	
	$scope.timeline; //array of tweets

    $scope.getTimeline = function(){
    	twitterService.getTimeline()
    	  .then(function(response){
    	  	$scope.timeline = response;
    	  })
    }
}]);