/* JavaScript para cargar el archivo de GitHub y habilitar el botón de copiar */

// URL cruda del archivo de GitHub

// Función para extraer el nombre del archivo de la URL
function obtenerNombreArchivo(url) {
    const partesUrl = url.split('/');
    return partesUrl[partesUrl.length - 1]; // Último segmento de la URL es el nombre del archivo
}

// Función para cargar y mostrar el contenido del archivo de GitHub
fetch(archivoGitHub)
    .then(response => response.text())
    .then(data => {
        // Insertar el código en el contenedor
        document.getElementById('codigo-github').textContent = data;

        // Reprocesar el bloque de código para resaltarlo con Prism
        Prism.highlightAll();
    })
    .catch(error => {
        console.error('Error al cargar el archivo:', error);
        document.getElementById('codigo-github').textContent = 'Error al cargar el código.';
    });

// Función para copiar el contenido del código
function copiarCodigo() {
    // Seleccionar el código dentro del bloque
    const codigo = document.getElementById('codigo-github').textContent;
    // Crear un área de texto temporal para copiar el texto
    const textArea = document.createElement('textarea');
    textArea.value = codigo;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    // Cambiar el texto del botón temporalmente
    const button = document.querySelector('.copy-button');
    button.textContent = 'Copiado';
    setTimeout(() => button.textContent = 'Copiar', 2000);
}
