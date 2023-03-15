<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Detalle del estudiante
                </div>
                <div class="card-body">
                    <div class="d-grid col-6 mx-auto mb-3">
                        <router-link :to="{ path: '/estudiantes' }" class="btn btn-info">
                            <i class="fa-solid fa-arrow-left"></i> Regresar a la lista
                        </router-link>
                    </div>
                    <div class="d-grid col-6 mx-auto mb-3">
                        <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                        <img v-else height="100" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png"
                            id="fotoimg" class="img-thumbnail" alt="">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <label v-text="nombre" class="form-control"></label>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                        <label v-text="apellido" class="form-control"></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<!-- Aqui se importan las librerias de apoyo para las peticiones Http y las alertas -->
<script>
import { mostrarAlerta, enviarSolicitud } from '../funciones';
import { useRoute } from 'vue-router';
import axios from 'axios';

export default {
    data() {
        return {
            id: 0,
            nombre: '',
            apellido: '',
            foto: '',
            url: 'http://appusers.test:85/api/v1/estudiantes',
            cargando: false
        }
    },
    mounted() {
        //Extraer de la URL el id enviado
        const route = useRoute();
        this.id = route.params.id;
        this.url += '/' + this.id;
        this.getEstudiante();
    },
    methods: {
        getEstudiante() {
            axios.get(this.url)
                .then(
                    res => {
                        this.nombre = res.data.data.nombre;
                        this.apellido = res.data.data.apellido;
                        this.foto = res.data.data.foto;
                    }
                );
        },
        actualizar() {
            // No enviar el formulario hasta que realice la validación
            event.preventDefault();
            var miFoto = document.getElementById('fotoimg');
            // Cuando guarde verifica lo que voy a obtener
            this.foto = miFoto.src;

            // Trim evita que se guarde un campo con espacios en blanco al principio o al final de un dato
            if (this.nombre.trim() === '') {
                mostrarAlerta('Ingresa un nombre', 'warning', 'nombre');
            } else if (this.apellido.trim() === '') {
                mostrarAlerta('Ingresa un apellido', 'warning', 'apellido');
            } else {
                // Si todo esta correcto se hace envio del método de Guardado para almacenar la foto en base64
                var parametros = {
                    nombre: this.nombre.trim(),
                    apellido: this.apellido.trim(),
                    foto: this.foto.trim()
                }
                // Se modifica método para generar acción de actualización
                enviarSolicitud('PUT', parametros, this.url, '¡Estudiante actualizado!');
            }
        },
        previsualizarFoto(event) {
            var reader = new FileReader();
            // Toma el primer archivo de los seleccionados
            reader.readAsDataURL(event.target.files[0]);
            // Carga la imagen de la fuente seleccionada
            reader.onload = function () {
                var miFoto = document.getElementById('fotoimg');
                miFoto.src = reader.result;
                this.foto = miFoto.src;
            }
        }
    }
}
</script>