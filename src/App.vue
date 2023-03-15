<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid d-flex">
      <a class="navbar-brand" href="#">
        <img src="./assets/imgs/logoupb.png" alt="Bootstrap" width="100" height="60" class="mb-0 p-0">
        &nbsp; Gestión Academica
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="dropdown-item">
              <p class="nav-link active m-0" aria-current="page" href="#">Inicio</p>
            </router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estudiantes
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/estudiantes" class="dropdown-item">Listar estudiantes</router-link>
              </li>
              <li>
                <router-link to="/createE" class="dropdown-item">Registrar nuevo</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cursos
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/cursos" class="dropdown-item">Listar cursos</router-link>
              </li>
              <li>
                <router-link to="/createC" class="dropdown-item">Registrar nuevo</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid">
    <router-view />
  </div>
</template>
