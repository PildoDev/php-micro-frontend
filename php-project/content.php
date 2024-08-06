<?php
// Logica de negocio para el contenido
// include 'load_vite_asset.php';
include './assets/php-scripts/load_vite_asset.php';
$currentPath = $_SERVER['REQUEST_URI'];
?>

<div class="container">
    <div id="content-php">
        <h1>Bienvenido a mi aplicación.</h1>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Popup</button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div id="alm-pop-up">
                        <input type="hidden" name="dialogMessage" id="dialogMessage" data-message="Este es un mensaje modificado desde PHP">
                        <p>No se puede cargar react</p>
                    </div>
                </div>
            </div>
        </div>

        <br>
        <br>
        <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <li class="nav-item" role="presentation">
                <a href="/characters" target="">
                    <button class="nav-link nav-link-hover <?php echo ($currentPath == '/characters') ? 'active' : ''; ?> rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="<?php echo ($currentPath == '/characters') ? 'true' : 'false'; ?>">Characters</button>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="/locations" target="">
                    <button class="nav-link nav-link-hover <?php echo ($currentPath == '/locations') ? 'active' : ''; ?> rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="<?php echo ($currentPath == '/locations') ? 'true' : 'false'; ?>">Locations</button>
                </a>
            </li>
            <li class="nav-item" role="presentation">
                <a href="/episodes" target="">
                    <button class="nav-link nav-link-hover <?php echo ($currentPath == '/episodes') ? 'active' : ''; ?> rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="<?php echo ($currentPath == '/episodes') ? 'true' : 'false'; ?>">Episodes</button>
                </a>
            </li>
        </ul>
    </div>
    <!-- DESDE LOCAL -->
    <!-- <h4>Ruta del archivo LOCAL compilado: <?php echo loadAssetFromProject('index.js', 'assets'); ?> </h4> -->

    <!-- DESDE VITE LOCAL -->
    <!-- <h4>Ruta del archivo VITE LOCAL compilado: http://localhost/react-microfront/dist/<?php echo loadAssetFromVite('index.js', 'assets'); ?> </h4> -->

    <!-- DESDE VITE URL -->
    <h4>Ruta URL del archivo index.js compilado: <?php echo loadAssetFromViteURL('js'); ?></h4>
    <br>
    <h4>Ruta URL del archivo index.css compilado: <?php echo loadAssetFromViteURL('css'); ?></h4>

    <!-- SECCION PARA EL CONTENIDO REACT -->
    <div id="react-content">
        <!-- Some react code here -->
        <h3>No se pudo cargar el módulo de react</h3>
    </div>
</div>

<!-- React Scripts -->

<!-- DESDE LOCAL -->
<!-- <script type="module" src="./assets/react/<?php echo loadAssetFromProject('index.js', 'assets'); ?>"></script> -->

<!-- DESDE VITE LOCAL -->
<!-- <script src="http://localhost/react-microfront/dist/<?php echo loadAssetFromVite('index.js', 'assets'); ?>"></script> -->

<!-- DESDE VITE URL -->
<script src="<?php echo loadAssetFromViteURL('js'); ?>"></script>

