$(document).ready(function() {
	if($("#probando1").is(":hidden")){
		$("#probando2").focus();
	}
});
//Hacer que el usuario tipea el nombre y la pagina le de el saludo !
//pasar a llamada el nombre, el succes y el fail, referencia a una funcion

function llamada(){
	$.ajax({
		url: "http://bootcamp.aws.af.cm/welcome/Noel Cantoia",
		dataType: "json",
		type: "GET"
	})
	.done(function (data){
		$("#probando1").text(data.response);
		resaltar();
		$("#probando1").show();
	}).fail(function( jqXHR, textStatus, errorThrown){
		$("#probando1").text("Error");
		$("#probando1").css("color", "red");
		$("#probando1").show();
})
};

function resaltar(){
	$("#probando1").highlight("Noel Cantoia!");
}
