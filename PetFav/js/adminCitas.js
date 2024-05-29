
// Función para obtener los datos de las citas
function obtenerDatos() {
  return fetch('../json/citas.json')
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

// Función para crear los registros de citas
function crearRegistro(datos) {
  const contenedor = document.querySelector('table');
  
  datos.forEach((cita, indice) => {
      const registro = document.createElement('tr');

      registro.innerHTML = `
          <td>${cita.nombreAnimal}</td>
          <td>${cita.nombreDueño}</td>
          <td>${cita.fecha}</td>
          <td>${cita.tipoCita}</td>
          <td>${cita.estado}</td>
          <td><input type="checkbox" id="checkbox${indice}"></td>
          <td><button class="eliminar">Eliminar</button></td>
      `;

      // Agregar controlador de eventos al checkbox
      const checkbox = registro.querySelector(`#checkbox${indice}`);
      checkbox.addEventListener('change', function() {
          const fila = this.closest('tr');
          if (this.checked) {
              fila.style.textDecoration = 'line-through';
          } else {
              fila.style.textDecoration = 'none';
          }
      });

      // Agregar controlador de eventos al botón de eliminar
      const botonEliminar = registro.querySelector('.eliminar');
      botonEliminar.addEventListener('click', function() {
          const fila = this.closest('tr');
          fila.remove(); // Eliminar la fila
      });

      contenedor.appendChild(registro);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  obtenerDatos().then(datos => {
      crearRegistro(datos);
  });
});