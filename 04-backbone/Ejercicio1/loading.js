  //Falta guardar los datos en forma local

  var Movie = Backbone.Model.extend({
    defaults:{
      name: null,
      year: null,
      description: null,
      genre: null
    }
  });
  
  var m1 = new Movie({name:"The lord of the Ring", year:"2010", description:"A good movie", genre:"action"});

  ViewMovie = Backbone.View.extend({
    initialize:function(){
      this.render();
    },
    render: function(){
      var source = $("#movie-template-ejercicio1").html();
      var template = Handlebars.compile(source);
      // probar si pasando la pelicula derecho funciona
      var context = {name:m1.get("name"), year: m1.get("year"), description:m1.get("description"), genre:m1.get("genre")};
      var output = template(context);
      $("#movieOutput").append(output);
    }
  });
  
  view1 = new ViewMovie();
  
  

  var Movies = Backbone.Collection.extend({
    model: Movie,
    url: "#"
  });

  Movies = new Movies();
  Movies.add([
    new Movie({name:"The lord of the Ring", year:"2010", description:"A good movie", genre:"action"}),
    new Movie({name:"The lord of the Ring 1", year:"2011", description:"A good movie", genre:"action"}),
    new Movie({name:"The lord of the Ring 2", year:"2012", description:"A good movie", genre:"action"}),
    new Movie({name:"The lord of the Ring 3", year:"2013", description:"A good movie", genre:"action"})
  ]);
  

ViewListMovies = Backbone.View.extend({
  el: "#section1",
  template: _.template($("#movie-template").html()),
  initialize:function(){
    this.listenTo(this.model, "change", this.render());
    this.render();
    this.m2 = new Movie();
  },
  events:{
    "click #add_button": "addMovie",
    "click #delete_button": "deleteMovie",
    "click #edit_button": "editMovie1",
  },
  clear:function(){
   $("#Movie_name").val("");
   $("#Movie_year").val("");
   $("#Movie_description").val("");
   $("#Movie_genre").val("");
  },
  editMovie1:function(){
  
    this.m2.set("name",$("#Movie_name").val());
    this.m2.set("year",$("#Movie_year").val());
    this.m2.set("description",$("#Movie_description").val());
    this.m2.set("genre",$("#Movie_genre").val());
  
    Movies.remove(Movies.at($(arguments[0].currentTarget).parent().index()));
    Movies.add(this.m2, {at:$(arguments[0].currentTarget).parent().index()});
    this.render();
    this.m2 = new Movie();
    this.clear();
  },

  addMovie: function(){
    Movies.add({name:$("#Movie_name").val(),year:$("#Movie_year").val(),description:$("#Movie_description").val(),genre:$("#Movie_genre").val()});
    this.clear();
    this.render();
  },
  deleteMovie: function(){
    Movies.remove(Movies.at($(arguments[0].currentTarget).parent().index()));
    this.render();
  },
  render:function(){
  $("#list-movies").empty(); 
  //Probar con handlebars iterar entre los template 
    Movies.each(function(movie){
      var $li =$("<li>")
      var source = $("#movie-template").html();
      var template = Handlebars.compile(source);
      var context = {name:movie.get("name"), year: movie.get("year"), description:movie.get("description"), genre:movie.get("genre")};
      var output = template(context);
      $li.html(output);
      $("#list-movies").append($li);
    });
    return this;
  }
});

view2 = new ViewListMovies({model:Movies});