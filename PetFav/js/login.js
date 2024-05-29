const formularioLogin = document.getElementById("containerDatos")
const formularioRegistro = document.getElementById("containerRegistro")
const botonRegistro = document.getElementById("botonRegistro")
const regresarLogin = document.getElementById("botonRegresarLogin")
const registroExitoso = document.getElementById("registroExitoso")
const botonIngresar = document.getElementById("botonIngresar")

const textoNombre = document.getElementById("textoNombre")
const textoContraseña = document.getElementById("textoContraseña")

botonIngresar.addEventListener('click', async () => {
  try {
    const respuestaLogin = await fetch('../json/login.json');
    const dataLogin = await respuestaLogin.json();
    let credencialesCorrectas = false;
    let permiso = "";

    for (const item of dataLogin) {
      if (textoNombre.value === item.usuario && textoContraseña.value === item.contraseña) {
        credencialesCorrectas = true;
        permiso = item.permiso;
        break; 
      }
    }

    if (credencialesCorrectas) {
      // Simulación de obtención de token 
      const token = 'token_de_autenticacion_generado';

      // Guardar el token en localStorage
      localStorage.setItem('token', token);

      // Redirigir a la página correspondiente según el permiso del usuario
      if (permiso === "cliente") {
        window.location.href = "../html/página_principal.html";
      } else if (permiso === "administrador") {
        window.location.href = "../html/adminCitas.html";
      }
    } else {
      textoNombre.value = "";
      textoContraseña.value = "";
    }
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
  }
});

botonRegistro.addEventListener('click',function(){
  formularioLogin.setAttribute("style", 'display: none;')
  formularioRegistro.setAttribute("style", 'display: flex;')
  console.log(formularioLogin)
})

regresarLogin.addEventListener('click',function(){
  formularioLogin.setAttribute("style", "display: flex;")
  formularioRegistro.setAttribute("style", "display: none;")
})

registroExitoso.addEventListener('click',function(){
  formularioLogin.setAttribute("style", "display: flex;")
  formularioRegistro.setAttribute("style", "display: none;")
})

