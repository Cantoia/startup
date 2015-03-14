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
	  .when("/Details/:id",{
	  	templateUrl: "Views/Details.html",
	  	controller: "detailsController"
	  })
	  .when("/Blocks",{
	  	templateUrl:"Views/Blocks.html",
	  	controller:"blocksController"
	  })
	  .when("/Tweetintrends/:search",{
	  	templateUrl:"Views/Tweetintrends.html",
	  	controller:"tweetintrendsController"
	  })
	  .otherwise({
	  	redirectTo: "/Inicio"
	  });
});