$(document).ready (function(){
	$("#btn").click (function (){
			$.ajax({
				url: "https://api.spotify.com/v1/search",
				dataType: "json",
				type: "GET",
				data: {q:$("#inp").val(), type:'album'}
			})
		.done(function (data){
			$("#art").empty();
			$.each(data.albums.items, function(index, album){
				var $div = $("<div>",{"class":"celdas"});
				var $p = $("<p>",{"class":"parrafo"});
				var $tipo = $("<p>", {"class":"tipo"});
				var $url = $("<a>",{"class": "web", "href":data.albums.items[index].external_urls.spotify, "target":"_blank"});
				var $img = $("<img>" ,{"class":"fotos"});
				$p.text(data.albums.items[index].name);
				$tipo.text(data.albums.items[index].album_type);
				$url.text("Spotify");
				$img.attr("src", data.albums.items[index].images[2].url);
				$url.appendTo($div);
				$img.appendTo($div);
				$p.appendTo($div);
				$tipo.appendTo($div);
				$("#art").append($div);
			});
		})
		.fail(function( jqXHR, textStatus, errorThrown){
			alert("Error");
		});
	});
});