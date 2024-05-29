function obtenerDatos() {
    return fetch('../json/animales.json')
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
      const contenedor = document.querySelector('.container_p_ado');
  
      datos.forEach(animal => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('card', 'tarjeta-seleccionada'); // Añadir la clase tarjeta-seleccionada
  
        tarjeta.innerHTML = `
          <div id="card">
            <div id="card_pes">
              <h2>${animal.nombre}</h2>
            </div>
            <div id="card_carp">
              <div id="card_carp_l">
                <img src="${animal.imagen}" alt="${animal.nombre}">
                <h2>${animal.nombre}</h2>
                <p>${animal.descripcion}</p>
              </div>
              <div id="card_carp_r">
                <p>${animal.descripcion}</p>
                <input type="text">
                <button onclick="solicitarAdopcion(${animal.id})">Adoptar</button>
              </div>
            </div>
          </div>
        `;
  
        contenedor.appendChild(tarjeta);
      });
    });
  }
  
  function solicitarAdopcion(id) {
    window.location.href = `../html/adopcion.html?id=${id}`;
  }
  
  document.addEventListener('DOMContentLoaded', crearTarjetas);
  