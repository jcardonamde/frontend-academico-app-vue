import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteList from '../views/EstudianteList.vue'
import EstudianteNew from '../views/EstudianteNew.vue'
import EstudianteEdit from '../views/EstudianteEdit.vue'
import EstudianteView from '../views/EstudianteView.vue'
import CursoList from '../views/CursoList.vue'
import CursoNew from '../views/CursoNew.vue'
import CursoEdit from '../views/CursoEdit.vue'
import CursoView from '../views/CursoView.vue'

// Aquí configuro las Rutas a utilizar dentro de mi la aplicación
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/estudiantes',
    name: 'estudiantes',
    component: EstudianteList
  },
  {
    path: '/createE',
    name: 'createE',
    component: EstudianteNew
  },
  {
    path: '/editE/:id',
    name: 'editE',
    component: EstudianteEdit
  },
  {
    path: '/viewE/:id',
    name: 'viewE',
    component: EstudianteView
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: CursoList
  },
  {
    path: '/createC',
    name: 'createC',
    component: CursoNew
  },
  {
    path: '/EditC/:id',
    name: 'EditC',
    component: CursoEdit
  },
  {
    path: '/viewC/:id',
    name: 'viewC',
    component: CursoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
