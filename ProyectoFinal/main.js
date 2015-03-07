var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
	  .when("/Inicio",{
	  	templateUrl: "Views/Home.html",
	  	controller: "Controllers/mainController"
	  })
	  .when("/Timeline",{
	  	templateUrl: "Views/Timeline.html",
	  	controller: "Controllers/timelineController"
	  })
	  .when("/Trends",{
	  	templateUrl: "Views/Trends.html",
	  	controller: "Controllers/TrendsController"
	  })
	  .otherwise({
	  	redirectTo: "/"
	  });
});