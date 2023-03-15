<template>
    <br>
    <div class="row mt-5 mb-4">
        <h1>Bienvenido al sitio de Gestión Academica UPB</h1>
        <p>Actualmente estamos en la construcción de un portafolio. Te invitamos a conocer nuestras técnicas laborales. </p>
    </div>
    <div class="row">
        <p>
            <a class="btn btn-primary" role="button">
                <router-link to="/estudiantes" class="dropdown-item">
                    Ver Estudiantes activos
                </router-link>
            </a>
            &nbsp;
            <button class="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2"
                aria-expanded="false" aria-controls="collapseExample2">
                Conoce nuestros proximos Cursos
            </button>
        </p>
        <div class="collapse" id="collapseExample2">
            <div class="card card-body mt-3 w-100 bg-secondary">
                <div class="d-flex justify-content-between w-100">
                    <div class="card text-center h-25" style="width: 800px;">
                        <img src="../assets/imgs/IMG-P2.jpg" class="card-img-top img-fluid w-100"
                        style="height: 420px;" alt="Imagen Curso animación 2D">
                        <div class="card-body">
                            <h5 class="card-title">Animación 2D</h5>
                            <p class="card-text">Res. N° 201950124432 del 27 de diciembre de 2019 / Vigencia Res. 5 años</p>
                            <a href="#" class="btn btn-primary">Inscríbete</a>
                        </div>
                    </div>
                    <div class="card text-center h-50 ms-2 me-2" style="width: 800px;">
                        <img src="../assets/imgs/IMG-P1.jpg" class="card-img-top img-fluid w-100" 
                        style="height: 420px;" alt="Imagen Curso Energias renovables">
                        <div class="card-body">
                            <h5 class="card-title">Energías Renovables</h5>
                            <p class="card-text">Res. N° 201950124432 del 27 de diciembre de 2019 / Vigencia Res. 5 años</p>
                            <a href="#" class="btn btn-primary">Inscríbete</a>
                        </div>
                    </div>
                    <div class="card text-center h-50" style="width: 800px;">
                        <img src="../assets/imgs/IMG-P3.jpg" class="card-img-top img-fluid w-100"
                        style="height: 420px;" alt="Imagen Curso Programación de Software">
                        <div class="card-body">
                            <h5 class="card-title">Programación de Software</h5>
                            <p class="card-text">Res. N° 202150037143 del 8 abril 2021 / Vigencia Res. 5 años</p>
                            <a href="#" class="btn btn-primary">Inscríbete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>