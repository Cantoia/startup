myApp.controller("timelineController",["$scope","twitterService",
  function($scope,twitterService){
	
	$scope.timeline; //array of tweets
    
    $scope.Detail_name; //details for one twet
    $scope.Detail_tweet;
    $scope.Detail_img;

    $scope.getTimeline = function(){
    	twitterService.getTimeline()
    	  .then(function(response){
    	  	$scope.timeline = response;
    	  })
    }
    
    $scope.getDetail = function(index){
        $scope.Detail_name = $scope.timeline[index].user.name;
        $scope.Detail_tweet = $scope.timeline[index].text;
        $scope.Detail_img = $scope.timeline[index].user.profile_image_url;
   }

}]);