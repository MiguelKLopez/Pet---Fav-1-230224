document.addEventListener("DOMContentLoaded", function() {
  var dias = document.querySelectorAll('.dia');
  var diasSeleccionados = [];

  dias.forEach(function(dia) {
    dia.addEventListener('click', function() {
      if (diasSeleccionados.length < 4 || dia.classList.contains('diaSeleccionado')) {
        if (!dia.classList.contains('diaSeleccionado')) {
          if (diasSeleccionados.length === 4) {
            return;
          }
          diasSeleccionados.push(dia);
          dia.classList.add('diaSeleccionado', 'rojo');
          console.info(dias)
        } else {
          var index = diasSeleccionados.indexOf(dia);
          if (index !== -1) {
            diasSeleccionados.splice(index, 1);
          }
          dia.classList.remove('diaSeleccionado', 'rojo');
        }
      }
    });
  });

  document.getElementById('btnReiniciar').addEventListener('click', function() {
    diasSeleccionados.forEach(function(diaSeleccionado) {
      diaSeleccionado.classList.remove('diaSeleccionado', 'rojo');
    });
    diasSeleccionados = [];
  });
});