import Swal from "sweetalert2";
import axios from "axios";
import { icon } from "@fortawesome/fontawesome";


// Función para mostrar Alerta de campo faltante
export function mostrarAlerta(titulo, icono, foco='') {
    if(foco!='') {
        document.getElementById(foco).focus();
    }

    // Generar ventana personalizada
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton: 'btn btn-primary', popup: 'animate zoonIn'},
        buttonsStyling:false
    });
}


// Función para generar alerta al confirmar borrado de un usuario
export function confirmar(urlConSlash, id, titulo, mensaje) {
    var url = urlConSlash+id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3', cancelButton:'btn btn-danger'},
    });

    swalWithBootstrapButton.fire({
        title:titulo,
        text:mensaje,
        icono:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((res) => {
        if(res.isConfirmed) {
            enviarSolicitud('DELETE', {id:id}, url, 'Eliminado con éxito');
        }else{
            mostrarAlerta('Operación Cancelada', 'info');
        }
    });
    
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup: 'animate zoonIn'},
        buttonsStyling:false
    });
}


// Función para ejecutar la petición de borrado y su flujo
export function enviarSolicitud(metodo, parametros, url, mensaje) {
    // Envio solicitud con Axios
    axios({method:metodo, url:url, data:parametros})
    .then(function(res){
        // Variable para el estado del servidor
        var estado = res.status;
        if(estado == 200) {
            mostrarAlerta(mensaje,'success');
            window.setTimeout(function(){
                // Generando redirección a la ruta principal '/'
                window.location.href='/estudiantes'
            },1000);
        } else {
            mostrarAlerta('No se pudo recuperar la respuesta','error');
        }
    }).catch(function(error){
        mostrarAlerta('Servidor no disponible','error');
    });
}


// Función para generar alerta al confirmar borrado de un usuario
export function confirmarCursos(urlConSlash, id, titulo, mensaje) {
    var url = urlConSlash+id;
    const swalWithBootstrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3', cancelButton:'btn btn-danger'},
    });

    swalWithBootstrapButton.fire({
        title:titulo,
        text:mensaje,
        icono:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'
    }).then((res) => {
        if(res.isConfirmed) {
            enviarSolicitudCursos('DELETE', {id:id}, url, 'Eliminado con éxito');
        }else{
            mostrarAlerta('Operación Cancelada', 'info');
        }
    });
    
    Swal.fire({
        title:titulo,
        icon:icono,
        customClass:{confirmButton:'btn btn-primary', popup: 'animate zoonIn'},
        buttonsStyling:false
    });
}


// Función para ejecutar la petición de borrado y su flujo para los cursos
export function enviarSolicitudCursos(metodo, parametros, url, mensaje) {
    // Envio solicitud con Axios
    axios({method:metodo, url:url, data:parametros})
    .then(function(res){
        // Variable para el estado del servidor
        var estado = res.status;
        if(estado == 200) {
            mostrarAlerta(mensaje,'success');
            window.setTimeout(function(){
                // Generando redirección a la ruta principal '/'
                window.location.href='/cursos'
            },1000);
        } else {
            mostrarAlerta('No se pudo recuperar la respuesta','error');
        }
    }).catch(function(error){
        mostrarAlerta('Servidor no disponible','error');
    });
}