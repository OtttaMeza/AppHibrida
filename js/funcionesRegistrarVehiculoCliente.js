function agregarVehiculo(cedulaCliente,placaVehiculo,marcaVehiculo,
	lineaVehiculo,modeloVehiculo,colorVehiculo) {

cadena="cedulaCliente=" + cedulaCliente +
		 "&placaVehiculo=" + placaVehiculo + 
		  "&marcaVehiculo=" + marcaVehiculo +
		   "&lineaVehiculo=" + lineaVehiculo +
		   "&modeloVehiculo=" + modeloVehiculo +
		    "&colorVehiculo=" + colorVehiculo;

	$.ajax({
		type:"POST",
		url:"../cliente/agregarRegistroVehiculoBD.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#tabla').load('../cliente/tablaRegistrarVehiculoCliente.php');
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
	$('#cedulaClienteEdit').val(d[1]);
     $('#placaVehiculoEdit').val(d[2]);
     $('#marcaVehiculoEdit').val(d[3]);
     $('#lineaVehiculoEdit').val(d[4]);
      $('#modeloVehiculoEdit').val(d[5]);
     $('#colorVehiculoEdit').val(d[6]);
	
}
//ACTUALIZAR LOS DATOS EN EL MODAL EDITOR
function actualizarDatos(){

	idEdit=$('#idEdit').val();
	cedulaClienteEdit=$('#cedulaClienteEdit').val();
	placaVehiculoEdit=$('#placaVehiculoEdit').val();
	marcaVehiculoEdit=$('#marcaVehiculoEdit').val();
	lineaVehiculoEdit=$('#lineaVehiculoEdit').val();
	modeloVehiculoEdit=$('#modeloVehiculoEdit').val();
	colorVehiculoEdit=$('#colorVehiculoEdit').val();

	cadena="idEdit=" + idEdit +
		"&cedulaClienteEdit=" + cedulaClienteEdit +
		 "&placaVehiculoEdit=" + placaVehiculoEdit + 
		  "&marcaVehiculoEdit=" + marcaVehiculoEdit +
		   "&lineaVehiculoEdit=" + lineaVehiculoEdit +
		   "&modeloVehiculoEdit=" + modeloVehiculoEdit+
		    "&colorVehiculoEdit=" + colorVehiculoEdit;

	$.ajax({
		type:"POST",
		url:"../cliente/actualizarRegistroVehiculoBD.php",
		data:cadena,
		success: function(r){

			if(r==1){
				$('#tabla').load('../cliente/tablaRegistrarVehiculoCliente.php');
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
		url:"../cliente/eliminarRegistroVehiculoBD.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#tabla').load('../cliente/tablaRegistrarVehiculoCliente.php');
				alertify.success("Eliminado Correctamente :)");
			}else{
				alertify.error("Error al Eliminar :(");
			}
		}
	});
}

///////////////MODIFICAR------------

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

			if(r=='admin'){				
				window.location='administrador/gestionarUsuarios.php';				
			}else if(r=='cliente'){
				window.location='paginas/AutoPartes.php';
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
		    "&primerApellido=" + primerApellido+
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



function solicitarReparacion(placaVehiculo){

	cadena="placa="+placaVehiculo;
		

		$.ajax({
		type:"POST",
		url:"../operaciones/SolicitarReparacion.php",
		data:cadena,
		success: function(r){

			if(r==1){				
				alertify.success("Se ha asignado un turno a su vehiculo.. :)");			
			}else if(r==2){
				alertify.error("El vehiculo ya posee un turno.. :(");
			}else{
				alertify.error("No se pudo asignar turno al vehiculo.. :(");

			}
		}
	});
}


