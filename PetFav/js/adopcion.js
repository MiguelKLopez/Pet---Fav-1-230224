const token = []; 

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

function mostrarDatosAnimal(animal) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const html = document.querySelector('html');

  modalContent.innerHTML = `
    <div id="containerDatosAnimal">
      <h2>${animal.nombre}</h2>
      <img id="modalImagen" src="${animal.imagen}">
      <p>Edad: ${animal.edad}</p>
      <p>Especie: ${animal.especia}</p>
      <p>Descripción: ${animal.descripcion}</p>
    </div>
    <div id="containerDatosSolicitud">
      <h3> Agendar cita </h3>
      <label> Nombre </label> <input placeholder="Miguel Ángel L."></input>
      <label> Motivo </label> <input placeholder="Adopción"></input>
      <button>Agendar cita de adopción</button>
    </div>
  `;

  modal.style.display = 'block';
  html.style.overflowY = 'hidden';

  // Asignar evento para cerrar el modal al hacer clic en el botón "Cerrar"
  const closeModal = document.querySelector('.close');
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    html.style.overflow = 'scroll';
    html.style.overflowX = 'hidden';
  });
}

function crearTarjeta(animal) {
  const tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');

  tarjeta.innerHTML = `
    <div class="imagenTarjeta" style="background-image: url('${animal.imagen}')" alt="${animal.especia}"></div>
    <div class="tarjetaInfo">
      <h2>${animal.nombre}</h2>
      <div>
        <h3>Edad: ${animal.edad}</h3>
      </div>
      <p>${animal.descripcion}</p>
    </div>
  `;

  // Agregar evento para mostrar el modal al hacer clic en la tarjeta
  tarjeta.addEventListener('click', function() {
    mostrarDatosAnimal(animal);
  });

  return tarjeta;
}

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.querySelector('.containerAnimales');
  obtenerDatos().then(datos => {
    datos.forEach(animal => {
      const tarjeta = crearTarjeta(animal);
      contenedor.appendChild(tarjeta);
    });
  });
});
