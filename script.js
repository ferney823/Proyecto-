// Esta función se ejecuta cuando el ratón pasa sobre una imagen
function upDate(previewPic) {
    console.log("upDate triggered");  // Verifica si la función se ejecuta correctamente
    console.log("Alt: " + previewPic.alt); // Imprime el alt de la imagen
    console.log("Src: " + previewPic.src); // Imprime la fuente de la imagen

    // Cambiar el texto y la imagen en el div con id 'imagen'
    document.getElementById("imagen").innerHTML = "<p>" + previewPic.alt + "</p>";
    document.getElementById("imagen").style.backgroundImage = "url('" + previewPic.src + "')";
}

// Esta función se ejecuta cuando el ratón sale de una imagen
function deshacer() {
    console.log("deshacer triggered"); // Verifica si la función se ejecuta correctamente

    // Restaurar el texto y la imagen de fondo
    document.getElementById("imagen").innerHTML = "<p>Pase el ratón por encima de una imagen para mostrarla aquí</p>";
    document.getElementById("imagen").style.backgroundImage = "url('')";
}

// Asignar los eventos a las imágenes
let previewImages = document.querySelectorAll(".preview");

previewImages.forEach(function (image) {
    image.addEventListener("mouseover", function () {
        upDate(image); // Llamar a upDate cuando el ratón pasa sobre la imagen
    });
    image.addEventListener("mouseout", deshacer); // Llamar a deshacer cuando el ratón sale de la imagen
});

