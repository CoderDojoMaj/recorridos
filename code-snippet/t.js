function addLineNumber(id) {
    var pre = document.getElementById(id)
    pre.innerHTML = '<span class="line-number"></span>' + pre.innerHTML + '<span class="cl"></span>'
    var num = pre.innerHTML.split(/\n/).length
    for (var j = 0; j < num; j++) {
        var lineNum = pre.getElementsByTagName('span')[0]
        lineNum.innerHTML += '<span>' + (j + 1) + '</span>'
    }
}

function getCode(resource,id) {
    fetch(resource)
        .then(response => response.text())
        .then(data => {
            // Insertar el código en el contenedor
            document.getElementById(id).textContent = data;
        })
        .catch(error => {
            console.error('Error al cargar el archivo:', error);
            document.getElementById(id).textContent = 'Error al cargar el código.';
        });
}