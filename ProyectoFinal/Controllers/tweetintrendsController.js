myApp.controller("tweetintrendsController",["$scope","$routeParams","twitterService","$window",
  function($scope,$routeParams,twitterService,$window){
	
	$scope.tweets; //array of tweets
  $scope.search = $routeParams.search;

 if(twitterService.isReady()){
  twitterService.getTweetsTrend($scope.search)
    .then(function(response){
      $scope.tweets = response.statuses;
  })
 }
 else{
  alert("Please login");
  $window.location.href = '#Inicio';
 }

  $scope.goBack = function(){
    $window.history.back();
  }

}]);