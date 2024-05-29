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

// Función para mostrar los datos del animal en el modal
function mostrarDatosAnimal(cita) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        Nombre del animal: ${cita.nombreAnimal}<br>
        Nombre del dueño: ${cita.nombreDueño}<br>
        Fecha: ${cita.fecha}<br>Estado: ${cita.estado}<br>
        Tiempo en meses: ${cita.tiempo} <br>
        <label>Cambiar estado: </label>
            <select id="miSelect">
                <option value="opcion1">Pendiente</option>
                <option value="opcion2">En espera</option>
                <option value="opcion3">Finalizado</option>
            </select>
        `;

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

    datos.forEach((cita, indice) => {
        const registro = document.createElement('tr');

        registro.innerHTML = `
            <td>${cita.nombreAnimal}</td>
            <td>${cita.nombreDueño}</td>
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
