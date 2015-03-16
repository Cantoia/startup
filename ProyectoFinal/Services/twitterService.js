myApp.service("twitterService",["$q", function($q){
 var rta = false;
 var that = this;


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
        	alert("Error in connection with twitter. Try again");
        }
      });
      return deferred.promise;
  },

  this.isReady = function(){
    return rta;
  }

  this.clearCache = function(){
    OAuth.clearCache("twitter");
    rta = false;
    that.name = "";
  }

  this.getUser = function(){
  	var deferred = $q.defer();
  	var promise = rta.get('/1.1/account/verify_credentials.json')
          .done(function(response){
          saveName(response);
        	deferred.resolve(response);
          })
          .fail(function(err){
        	alert("Error in getting user");
          });
    return deferred.promise;
  }

   function saveName(response){
    that.name = response.name;
  }
   
   this.getTimeline = function(){
    var deferred = $q.defer();
    var promise = rta.get('/1.1/statuses/home_timeline.json')
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error in getting user. Try again");
      });
    return deferred.promise;
   }

   this.getTweetDetail = function(id){
    var deferred = $q.defer();
    var promise = rta.get("/1.1/statuses/show.json?id="+id)
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error in getting tweets. Try again");
      });
    return deferred.promise;
   }

   this.getBlocks = function(){
    var deferred = $q.defer();
    var promise = rta.get('/1.1/blocks/list.json')
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error in getting blocks people. Try again");
      });
    return deferred.promise;
   }

   this.getWoeid = function(latitude, longitude){
    var deferred = $q.defer();
    var promise = rta.get("/1.1/trends/closest.json?lat="+latitude+"&long="+longitude)
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error in getting WOEID. Try again");
      });
    return deferred.promise;
   }

   this.getTrends = function(woeid){
    var deferred = $q.defer();
    var promise = rta.get("/1.1/trends/place.json?id="+woeid)
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error in getting nearest trends. Try again");
      })
    return deferred.promise;
   }

   this.getTweetsTrend = function(search){
    var deferred = $q.defer();
    var uri = search;
    var res = encodeURIComponent(uri);
    var promise = rta.get("/1.1/search/tweets.json?q=" +res)
      .done(function(response){
        deferred.resolve(response);
      })
      .fail(function(err){
        alert("Error in getting tweets from this Trend. Try again");
      })
    return deferred.promise;
   }

}]);