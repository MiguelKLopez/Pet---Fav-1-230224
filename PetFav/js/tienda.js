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
  
  function crearTarjetas() {
    obtenerDatos().then(datos => {
      const contenedor = document.querySelector('.containerProductos');
  
      datos.forEach(producto => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');
  
        tarjeta.innerHTML = `
          <button class="imagenTarjeta" style="background-image: url('${producto.imagen}')"></button>
          <div class="tarjetaInfo">
            <h2>${producto.nombre}</h2>
            <div class="precioDiv">
              <h3>MXN ${producto.precio}</h3>
              <img class="carritoCompra" src="../img/carrito-de-compras.png" alt="">
              <input class="cantidad" type="number" placeholder="x1" value="" min="0">
            </div>
            <p>${producto.descripcion}</p>
          </div>
        `;
  
        contenedor.appendChild(tarjeta);
        
      });
    });
  }
  
  function redireccionar(){
    window.location.href = '../html/adoptar.html';
  }
  
  document.addEventListener('DOMContentLoaded', crearTarjetas);
  