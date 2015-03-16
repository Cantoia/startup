myApp.controller("usernameController",["$scope","twitterService",
  function($scope,twitterService){

    $scope.username;

    $scope.username = twitterService.name;
 }]);