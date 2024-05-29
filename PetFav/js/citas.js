const citaEstetica = document.getElementById("citaEstética")
const citaMedica = document.getElementById("citaMédica")
const citaGuarderia = document.getElementById("citaGuardería")
const containerEstetica = document.getElementById("containerEstetica")
const containerMedica = document.getElementById("containerMedica")
const containerGuarderia = document.getElementById("containerGuarderia")


citaMedica.addEventListener('click', function(){
  containerMedica.setAttribute("style", 'display: inline;')
  containerEstetica.setAttribute("style", 'display: none;')
  containerGuarderia.setAttribute("style", 'display: none;')
})

citaGuarderia.addEventListener('click', function(){
  containerGuarderia.setAttribute("style", 'display: inline;')
  containerMedica.setAttribute("style", 'display: none;')
  containerEstetica.setAttribute("style", 'display: none;')
})

citaEstetica.addEventListener('click', function(){
  containerEstetica.setAttribute("style", 'display: inline;')
  containerGuarderia.setAttribute("style", 'display: none;')
  containerMedica.setAttribute("style", 'display: none;')
})