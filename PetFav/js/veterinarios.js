function obtenerDatos() {
return fetch('../json/veterinarios.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function crearTarjetas() {
obtenerDatos().then(datos => {
  const contenedor = document.querySelector('#apartadoReseñas');

  datos.forEach(veterinario => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('templateVeterinarios');

    let botones = '';

    for (let i = 0; i < 5; i++) {
      if (i < veterinario.calificación) {
        botones += '<button class="botonColoreado"></button>';
      } else {
        botones += '<button></button>';
      }
    }

    tarjeta.innerHTML = `
      <div class="tarjeta">
        <div class="tarjetaImagen"></div>
        <div class="tarjetaInformacion">
          <img src="${veterinario.imagen}"></img>
          <h2>${veterinario.nombre}</h2> 
          <p>${veterinario.descripción}</p>
          <div class="botonesVeterinaria">
            ${botones}
          </div>
        </div>
      </div>
    `;

    contenedor.appendChild(tarjeta);
  });
});
}

document.addEventListener('DOMContentLoaded', crearTarjetas);
