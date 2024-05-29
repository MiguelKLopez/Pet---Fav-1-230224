function obtenerDatosTestimonio() {
  return fetch('../json/reseñas.json')
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
  obtenerDatosTestimonio().then(datos => {
    const contenedor = document.querySelector('.apartadoTestimonios');
  
    datos.forEach(testimonio => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('templateVeterinarios');
  
      tarjeta.innerHTML = `
        <div class="tarjeta">
          <div class="tarjetaImagen"></div>
          <div class="tarjetaInformacion">
            <img src="${testimonio.imagen}" >
            <h2>${testimonio.nombre}</h2> 
            <p>${testimonio.descripción}</p>
          </div>
        </div>
      `;
  
      contenedor.appendChild(tarjeta);
    });
  });
  }
  
  function redireccionar() {
  window.location.href = '../html/adoptar.html';
  }
  
  document.addEventListener('DOMContentLoaded', crearTarjetas);
  