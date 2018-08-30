function agregarProducto(referenciaAgr,descripcionAgr,marcaAgr,modeloAgr,precioAgr) {

cadena="referenciaAgr=" + referenciaAgr +
		 "&descripcionAgr=" + descripcionAgr + 
		  "&marcaAgr=" + marcaAgr +
		   "&modeloAgr=" + modeloAgr +
		    "&precioAgr=" + precioAgr;

	$.ajax({
		type:"POST",
		url:"../administrador/agregarDatosBD.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#tabla').load('../administrador/tabla.php');
				alertify.success("Agregado Correctamente :)");
			}else{
				alertify.error("Error al Agregar :(");
			}
		}
	});
	
}
// TRAER LOS DATOS AL FORMULARIO DEL MODAL EDITAR
function agregarForm(datos){
	d=datos.split('||');

	$('#idEdit').val(d[0]);
	$('#referenciaEdit').val(d[1]);
	$('#descripcionEdit').val(d[2]);
	$('#marcaEdit').val(d[3]);
	$('#modeloEdit').val(d[4]);
	$('#precioEdit').val(d[5]);
	
}
//ACTUALIZAR LOS DATOS EN EL MODAL EDITOR
function actualizarDatos(){

	idEdit=$('#idEdit').val();
	referenciaEdit=$('#referenciaEdit').val();
	descripcionEdit=$('#descripcionEdit').val();
	marcaEdit=$('#marcaEdit').val();
	modeloEdit=$('#modeloEdit').val();
	precioEdit=$('#precioEdit').val();

	cadena="idEdit=" + idEdit +
		"&referenciaEdit=" + referenciaEdit +
		 "&descripcionEdit=" + descripcionEdit + 
		  "&marcaEdit=" + marcaEdit +
		   "&modeloEdit=" + modeloEdit +
		    "&precioEdit=" + precioEdit;

	$.ajax({
		type:"POST",
		url:"../administrador/actualizarDatos.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#tabla').load('../administrador/tabla.php');
				alertify.success("Actualizado Correctamente :)");
			}else{
				alertify.error("Error al Actualizar :(");
			}
		}
	});

}

function preguntarSiNo(id){
	alertify.confirm('Eliminar datos', '¿Desea eliminar los datos?', 
		function(){ eliminarDatos(id) }
        , function(){ alertify.error('Se cancelo')});
}
function eliminarDatos(id){
	cadena="id="+ id;

	$.ajax({
		type:"POST",
		url:"../administrador/eliminarDatos.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#tabla').load('../administrador/tabla.php');
				alertify.success("Eliminado Correctamente :)");
			}else{
				alertify.error("Error al Eliminar :(");
			}
		}
	});
}


function inicioSesion(ruta){
	
usuarioo=$('#usuario').val();
	contraseñaa=$('#conttraseña').val();

	cadena="usuario=" + usuarioo + 
		    "&contrasena=" + contraseñaa;

	$.ajax({
		type:"POST",
		url:ruta,
		data:cadena,
		success: function(r){
			if(r=='Administrador'){				
				//window.location='index.php';				
				location.reload(true);
			}else if(r=='Cliente'){
				//window.location='index.php';
				location.reload(true);
			}else if(r=='Mecanico'){
				//window.location='index.php';
				location.reload(true);
			}else{

				alertify.error("Error al iniciar sesión :(");

			}
		}
	});

}

function registrarUsuario(ruta){
	
cedula=$('#cedula').val();
primerNombre=$('#pNombre').val();
segundoNombre=$('#sNombre').val();
primerApellido=$('#pApellido').val();
segundoApellido=$('#sApellido').val();
telefono=$('#telefono').val();
direccion=$('#direccion').val();
contrasena=$('#contr').val();


	cadena="cedula=" + cedula + 
		    "&primerNombre=" + primerNombre+
		    "&segundoNombre=" + segundoNombre+
		    "&primerApellido=" + 
		    primerApellido+
		    "&segundoApellido=" + segundoApellido+
		    "&telefono=" + telefono+
		    "&direccion=" + direccion+
		    "&contrasena=" + contrasena;
	$.ajax({
		type:"POST",
		url:ruta,
		data:cadena,
		success: function(r){
			if(r==1){				
				alertify.success("Se ha registrado corectamente.. :)");			
			}else{
				alertify.error("Error al registrarse.. :(");

			}
		}
	});

}




function agregarAcotizacion(datos,y) {

	d=datos.split('||');

cadena="ref=" + d[1] +
		 "&desc=" + d[2] + 
		  "&marc=" + d[3] +
		   "&mode=" + d[4] +
		    "&prec=" + d[5]+
		    "&cant="+y;

	$.ajax({
		type:"POST",
		url:"AgregarProducto.php",
		data:cadena,
		success: function(r){
			if(r==1){
				alertify.success("Agregado Correctamente :)");
			}else if(r==3){
				alertify.notify("Solo los clientes pueden cotizar..");
			}else{
				alertify.error("Error al Agregar :(");
			}
		}
	});
	
}




function preguntarSiNoCotizacion(id){
	alertify.confirm('Eliminar datos', '¿Desea eliminar los datos?', 
		function(){ eliminarDatosCotizacion(id) }
        , function(){ alertify.error('Se cancelo')});
}
function eliminarDatosCotizacion(id){
	cadena="id="+ id;

	$.ajax({
		type:"POST",
		url:"../operaciones/eliminarCotizacion.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#tabla').load('tablaCotizacion.php');
				alertify.success("Eliminado Correctamente :)");
			}else{
				alertify.error("Error al Eliminar :(");
			}
		}
	});
}

