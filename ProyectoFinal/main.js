var myApp = angular.module("myApp",["ngRoute"]);

myApp.config(function($routeProvider){
	$routeProvider
	  .when("/Inicio",{
	  	templateUrl: "Views/Home.html",
	  	controller: "mainController"
	  })
	  .when("/Timeline",{
	  	templateUrl: "Views/Timeline.html",
	  	controller: "timelineController"
	  })
	  .when("/Trends",{
	  	templateUrl: "Views/Trends.html",
	  	controller: "trendsController"
	  })
	  .otherwise({
	  	redirectTo: "/Inicio"
	  });
});