<?php

//Cargar desde proyecto VITE por URL
function loadAssetFromViteURL($extension)
{
    $baseName = 'index.'. $extension;
    $urlBase = 'http://127.0.0.1:5173//dist/';
    // Asegúrate de que $urlBase termina con una barra
    $urlBase = rtrim($urlBase, '/') . '/';

    // Construir la URL completa para acceder al manifest.json
    $manifestUrl = $urlBase . '.vite/manifest.json';

    // Obtener el contenido del manifest.json
    $content = @file_get_contents($manifestUrl);

    if ($content === false) {
        return $manifestUrl . " - No se pudo acceder al manifest.json.";
    }

    // Decodificar el contenido JSON
    $manifest = json_decode($content, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        return $manifestUrl . " - Error al decodificar el JSON: " . json_last_error_msg();
    }

    // Verificar si el nombre base está en el manifest
    $baseNameKey = 'index.html'; // Ajustar para coincidir con el manifest.json
    if (isset($manifest[$baseNameKey])) {
        if($extension == 'js'){
            return $urlBase . $manifest[$baseNameKey]['file'];
        }else if($extension == 'css'){
            return $urlBase . $manifest[$baseNameKey]['css'][0];
        }
    }
    return $urlBase . "Archivo no encontrado.";
}
