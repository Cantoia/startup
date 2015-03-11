myApp.service("twitterService",["$q", function($q){
 var rta = false;

  this.connect = function(){
      var deferred = $q.defer();
	  OAuth.initialize('2tU3I9lNnXlGQ21I9yC08rRDRRw')
	  rta = OAuth.create("twitter");
	  OAuth.popup('twitter', function(error, result){
        if(!error){
        	rta = result;
        	deferred.resolve();
        }
        else{
        	alert("Error en la conexion con twitter");
        }
      });
      return deferred.promise;
  },

  this.getUser = function(){
  	var deferred = $q.defer();
  	var promise = rta.get('/1.1/account/verify_credentials.json')
          .done(function(response){
        	deferred.resolve(response);
          })
          .fail(function(err){
        	alert("Error en peticion");
          });
    return deferred.promise;
  }
   
   this.getTimeline = function(){
    var deferred = $q.defer();
    var promise = rta.get('/1.1/statuses/home_timeline.json')
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error al traer timeline");
      });
    return deferred.promise;
   }

}]);