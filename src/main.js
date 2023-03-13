import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.css'

createApp(App).use(store).use(router).mount('#app')

// Aquí se crea o se monta la App. Importo la libreria de JS para Bootstrap
import 'bootstrap/dist/js/bootstrap'