const botonImagenNoticia1 = document.getElementById("botonImagenNoticia1")
const botonImagenNoticia2 = document.getElementById("botonImagenNoticia2")
const botonImagenNoticia3 = document.getElementById("botonImagenNoticia3")

const botonesVeterinaria = document.querySelectorAll('.botonesVeterinaria button');
const nombreVeterinario = document.getElementById('nombreVeterinario');
const descripcionVeterinario = document.getElementById('descripcionVeterinario');
const calificacionVeterinario = document.getElementById('calificacionVeterinario');

const imagenNoticia = document.getElementById("imagenNoticia")

botonImagenNoticia1.addEventListener('click', () => cambiarImagen(0));
botonImagenNoticia2.addEventListener('click', () => cambiarImagen(1));
botonImagenNoticia3.addEventListener('click', () => cambiarImagen(2));

async function cambiarImagen(index) {
  try {
    const respuesta = await fetch('../json/noticias.json');
    const data = await respuesta.json();

    if (index >= 0 && index < data.length) {
      imagenNoticia.src = data[index].url;
    } else {
      console.error('El índice está fuera del rango válido.');
    }

  } catch (error) {
    console.error('Error al obtener o procesar los datos:', error);
  }
}
