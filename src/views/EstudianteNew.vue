<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">
                    Registrar estudiante
                </div>
                <div class="card-body">
                    <form v-on:submit="guardar">
                        <div class="d-grid col-6 mx-auto mb-3">
                            <img v-if="this.foto" height="100" :src="this.foto" id="fotoimg" class="img-thumbnail" alt="">
                            <img v-else height="100"
                                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-256.png" id="fotoimg"
                                class="img-thumbnail" alt="">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="nombre" id="nombre" placeholder="Ingrese su nombre"
                                class="form-control" maxlength="50" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" v-model="apellido" id="apellido" placeholder="Ingrese su apellido"
                                class="form-control" maxlength="50" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-file"></i></span>
                            <input type="file" v-on:change="previsualizarFoto" accept="image/png, image/jpeg, image/gif" class="form-control">
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
import { mostrarAlerta, enviarSolicitud } from '../funciones';

export default {
    data() {
        return {
            nombre: '',
            apellido: '',
            foto: '',
            url: 'http://appusers.test:85/api/v1/estudiantes',
            cargando: false
        }
    },
    methods: {
        guardar() {
            // No enviar el formulario hasta que realice la validación
            event.preventDefault();
            var miFoto = document.getElementById('fotoimg');
            // Cuando guarde verifica lo que voy a obtener
            this.foto = miFoto.src;

            // Trim evita que se guarde un campo con espacios en blanco al principio o al final de un dato
            if(this.nombre.trim()==='') {
                mostrarAlerta('Ingresa un nombre','warning','nombre');
            } else if(this.apellido.trim()==='') {
                mostrarAlerta('Ingresa un apellido','warning','apellido');
            } else {
                // Si todo esta correcto se hace envio del método de Guardado para almacenar la foto en base64
                var parametros = {
                    nombre:this.nombre.trim(),
                    apellido:this.apellido.trim(),
                    foto:this.foto.trim()
                }
                enviarSolicitud('POST', parametros, this.url, '¡Estudiante registrado!');
            }
        },
        previsualizarFoto(event) {
            var reader = new FileReader();
            // Toma el primer archivo de los seleccionados
            reader.readAsDataURL(event.target.files[0]);
            // Carga la imagen de la fuente seleccionada
            reader.onload = function() {
                var miFoto = document.getElementById('fotoimg');
                miFoto.src = reader.result;
                this.foto = miFoto.src;
            }
        }
    }
}
</script>