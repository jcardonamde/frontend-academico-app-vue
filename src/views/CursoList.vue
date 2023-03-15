<template>
    <div class="row">
        <!-- Garantizando responsive con Bootstrap -->
        <div class="col-lg-8 offset-lg-2">
            <div class="table-responsive">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>HORAS</th>
                            <th>REGISTRO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" id="contenido">
                        <tr v-if="this.cargando">
                            <td colspan="6">
                                <h3>Cargando...</h3>
                            </td>
                        </tr>
                        <tr v-else v-for="curso, i in this.cursos" :key="curso.id">
                            <!-- Aumentando el indice para crear cada id en la tabla -->
                            <td v-text="(i + 1)"></td>
                            <td v-text="curso.id"></td>
                            <td v-text="curso.nombre"></td>
                            <td v-text="curso.horas"></td>
                            <td v-text="new Date(curso.created_at).toLocaleDateString('en-US')"></td>
                            <td>
                                <router-link :to="{ path: 'viewC/' + curso.id }" class="btn btn-info">
                                    <i class="fa-solid fa-eye"></i>
                                </router-link>
                                &nbsp;
                                <router-link :to="{ path: 'editC/' + curso.id }" class="btn btn-warning">
                                    <i class="fa-solid fa-edit"></i>
                                </router-link>
                                &nbsp;
                                <button class="btn btn-danger" v-on:click="eliminar(curso.id, curso.nombre)">
                                    <i class="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<!-- Aqui se importan las librerias de apoyo para las peticiones Http y las alertas -->
<script>
import axios from 'axios';
import { confirmarCursos } from '../funciones';

export default {
    data() {
        return {
            cursos: null,
            cargando: false
        }
    },
    // Metodo que se ejecuta cuando se carga la pagina completa para traer los datos
    mounted() {
        this.getCursos();
    },
    methods: {
        getCursos() {
            this.cargando = true;
            axios.get('http://appusers.test:85/api/v1/cursos').then(
                res => {
                    this.cursos = res.data;
                    // Si ya se obtuvo la información, ya no carga data
                    this.cargando = false;
                }
            );
        },
        eliminar(id, nombre) {
            confirmarCursos('http://appusers.test:85/api/v1/cursos/', id, 'Eliminar registro', 'Realmente desea eliminar el curso ' + nombre + '?');
            this.cargando = false;
        }
    }
}
</script>