<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Detalle del Curso
                </div>
                <div class="card-body">
                    <div class="d-grid col-6 mx-auto mb-3">
                        <router-link :to="{ path: '/cursos' }" class="btn btn-info">
                            <i class="fa-solid fa-arrow-left"></i> Regresar a la lista
                        </router-link>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <label v-text="nombre" class="form-control"></label>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-clock"></i></span>
                        <label v-text="horas" class="form-control"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- Aqui se importan las librerias de apoyo para las peticiones Http y las alertas -->
<script>
import { mostrarAlerta, enviarSolicitudCursos } from '../funciones';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
    data() {
        return {
            id: 0,
            nombre: '',
            horas: '',
            url: 'http://appusers.test:85/api/v1/cursos',
            cargando: false
        }
    },
    mounted() {
        //Extraer de la URL el id enviado
        const route = useRoute();
        this.id = route.params.id;
        this.url += '/' + this.id;
        this.getCurso();
    },
    methods: {
        getCurso() {
            axios.get(this.url)
                .then(
                    res => {
                        this.nombre = res.data.data.nombre;
                        this.horas = res.data.data.horas;
                    }
                );
        },
        actualizar() {
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
                // Se modifica método para generar acción de actualización
                enviarSolicitudCursos('PUT', parametros, this.url, '¡Curso actualizado exitosamente!');
            }
        }
    }
}
</script>