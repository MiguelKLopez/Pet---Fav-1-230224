// Función para obtener los datos de las citas
function obtenerDatos() {
    return fetch('../json/productos.json')
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
    
    datos.forEach((producto) => {
        const registro = document.createElement('tr');
  
        registro.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td>${producto.cantidad}</td>
            <input class="cantidad" type="number" placeholder="x1" value="" min="0">
            <td><button class="eliminar">Eliminar</button></td>
        `;
  
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