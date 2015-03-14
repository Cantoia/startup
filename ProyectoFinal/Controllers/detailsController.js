myApp.controller("detailsController",["$scope","twitterService","$routeParams","$window",
  function($scope,twitterService,$routeParams,$window){
	
  $scope.id = $routeParams.id;
	$scope.timeline; //array of tweets

  $scope.Detail_name; //details for one twet
  $scope.Detail_tweet;
  $scope.Detail_img;

 if(twitterService.isReady()){
  twitterService.getTweetDetail($scope.id)
    .then(function(response){
      $scope.Detail_name = response.user.name;
      $scope.Detail_tweet = response.text;
      $scope.Detail_img = response.user.profile_image_url;
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