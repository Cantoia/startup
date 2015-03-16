myApp.directive("username", 
	function(){
		return{
			restrict: "E",
			template:"<footer>{{username}}</footer>",
			controller: "usernameController",
			replace: true
		}
})