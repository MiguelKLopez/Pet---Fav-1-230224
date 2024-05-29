// Función para obtener los datos de las citas
function obtenerDatos() {
  return fetch('../json/login.json')
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

// Función para mostrar los datos del animal en el modal
function mostrarDatosAnimal(usuario) {
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    Nombre:${usuario.nombre}<input><br>
    Contraseña:${usuario.contraseña}<type="password"><input><br>
    permiso: ${usuario.permiso}<input><br>`;

  modal.style.display = 'block';

  // Asignar evento para cerrar el modal al hacer clic en la "x"
  const closeModal = document.getElementsByClassName('close')[0];
  closeModal.onclick = function() {
      modal.style.display = 'none';
  };
}

// Función para crear los registros de citas
function crearRegistro(datos) {
  const contenedor = document.querySelector('table');

  datos.forEach((usuario, indice) => {
      const registro = document.createElement('tr');

      registro.innerHTML = `
          <td>${usuario.nombre}</td>
          <td>${usuario.contraseña}</td>
          <td>${usuario.permiso}</td>
          <td><button class="consultar" data-indice="${indice}">Consultar</button></td>
      `;

      // Agregar controlador de eventos al botón de consultar
      const botonConsultar = registro.querySelector('.consultar');
      botonConsultar.addEventListener('click', function() {
          const indice = this.getAttribute('data-indice');
          const cita = datos[indice];
          mostrarDatosAnimal(cita);
      });

      contenedor.appendChild(registro);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  obtenerDatos().then(datos => {
      crearRegistro(datos);
  });
});
