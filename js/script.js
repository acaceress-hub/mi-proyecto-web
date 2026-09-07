// Buzón CUC Escucha
// Manejo del formulario: solo front-end, sin envío a servidor.
// Guarda las sugerencias en localStorage para simular el registro.

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('buzon-form');
  const mensaje = document.getElementById('form-mensaje');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const sugerencia = {
      nombre: document.getElementById('nombre').value.trim(),
      correo: document.getElementById('correo').value.trim(),
      categoria: document.getElementById('categoria').value,
      sugerencia: document.getElementById('sugerencia').value.trim(),
      fecha: new Date().toISOString()
    };

    const guardadas = JSON.parse(localStorage.getItem('buzon-sugerencias') || '[]');
    guardadas.push(sugerencia);
    localStorage.setItem('buzon-sugerencias', JSON.stringify(guardadas));

    mensaje.textContent = 'Gracias, tu sugerencia llegó al buzón.';
    form.reset();
  });
});
