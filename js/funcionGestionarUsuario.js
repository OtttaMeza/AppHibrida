function funcionAgregarUsuarios(cedulaUsu,pNombreUsu,sNombreUsu,pApellidoUsu,sApellidoUsu,
	telefonoUsu,direccionUsu,contrUsu,selecTipoUsuario) {

cadena="cedulaUsu=" + cedulaUsu + 
		  "&pNombreUsu=" + pNombreUsu +
		   "&sNombreUsu=" + sNombreUsu +
		    "&pApellidoUsu=" + pApellidoUsu+
		    "&sApellidoUsu=" + sApellidoUsu+
		    "&telefonoUsu=" + telefonoUsu+
		    "&direccionUsu=" + direccionUsu+
		    "&contrUsu=" + contrUsu +
		    "&selecTipoUsuario=" + selecTipoUsuario;
		    

	$.ajax({
		type:"POST",
		url:"../administrador/agregarUsuarioBD.php",
		data:cadena,

		success: function(r){
			if(r==1){
				$('#divTablaUsuario').load('../administrador/tablaGestionarUsuario.php');
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


	$('#cedulaEdit').val(d[0]);
    $('#pNombreEdit').val(d[1]);
    $('#sNombreEdit').val(d[2]);
    $('#pApellidoEdit').val(d[3]);
    $('#sApellidoEdit').val(d[4]);
    $('#telefoEdit').val(d[5]);
    $('#direccionEdit').val(d[6]);
    $('#contrEdit').val(d[7]);
    $('#selecTipoUsuario').val(d[8]);
    
	 
}
//ACTUALIZAR LOS DATOS EN EL MODAL EDITOR
function actualizarDatos(){


	var sel=document.getElementById('selecTipoUsuarioEdit').options[document.getElementById('selecTipoUsuarioEdit').selectedIndex].text;

      cedulaEdit=$('#cedulaEdit').val();
      pNombreEdit=$('#pNombreEdit').val();
      sNombreEdit=$('#sNombreEdit').val();
      pApellidoEdit=$('#pApellidoEdit').val();
      sApellidoEdit=$('#sApellidoEdit').val();
      telefoEdit=$('#telefoEdit').val();
       direccionEdit=$('#direccionEdit').val();
      contrEdit=$('#contrEdit').val();
      selecTipoUsuarioEdit=sel;




	cadena="cedulaEdit=" + cedulaEdit +
		"&pNombreEdit=" + pNombreEdit +
		 "&sNombreEdit=" + sNombreEdit + 
		  "&pApellidoEdit=" + pApellidoEdit +
		   "&sApellidoEdit=" + sApellidoEdit +
		   "&telefoEdit=" + telefoEdit +
		   "&direccionEdit=" + direccionEdit +
		   "&contrEdit=" + contrEdit +
		    "&selecTipoUsuarioEdit=" + selecTipoUsuarioEdit;

	$.ajax({
		type:"POST",
		url:"../administrador/actualizarUsuarioBD.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#divTablaUsuario').load('../administrador/tablaGestionarUsuario.php');
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
		url:"../administrador/eliminarUsuarioBD.php",
		data:cadena,
		success: function(r){
			if(r==1){
				$('#divTablaUsuario').load('../administrador/tablaGestionarUsuario.php');
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


