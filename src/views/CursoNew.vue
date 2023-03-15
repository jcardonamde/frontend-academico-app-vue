<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Registrar Curso
                </div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese nombre del curso"
                                class="form-control" maxlength="50" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
                            <input type="text" v-model="horas" id="horas" placeholder="Ingrese las horas de duración"
                                class="form-control" maxlength="5" required>
                        </div>
                        <div class="d-grid col-6 mx-auto mb-3">
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i>  Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- Aqui se importan las librerias de apoyo para las peticiones Http y las alertas -->
<script>
import { mostrarAlerta, enviarSolicitudCursos } from '../funciones';

export default {
    data() {
        return {
            nombre: '',
            horas: '',
            url: 'http://appusers.test:85/api/v1/cursos',
            cargando: false
        }
    },
    methods: {
        guardar() {
            // No enviar el formulario hasta que realice la validación
            event.preventDefault();

            // Trim evita que se guarde un campo con espacios en blanco al principio o al final de un dato
            if(this.nombre.trim()==='') {
                mostrarAlerta('Ingresa un nombre de curso','warning','nombre');
            } else if(this.horas.trim()==='') {
                mostrarAlerta('Ingresa las horas de duración','warning','horas');
            } else {
                // Si todo esta correcto se hace envio del método de Guardado para almacenar la info
                var parametros = {
                    nombre:this.nombre.trim(),
                    horas:this.horas.trim()
                }
                enviarSolicitudCursos('POST', parametros, this.url, '¡Curso registrado exitosamente!');
            }
        }
    }
}
</script>