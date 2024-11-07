'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const botones = document.querySelectorAll('.galeria-menu button');
  const items = document.querySelectorAll('.galeria-item .item');

  botones.forEach((categorias) => {
    categorias.addEventListener('click', () => {
      const filtro = categorias.getAttribute('data-filtro');

      botones.forEach((categoria) => categoria.classList.remove('active'));
      categorias.classList.add('active');

      items.forEach((item) => {
        if (filtro === '*' || item.classList.contains(filtro)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
  // Evitar el envío del formulario para validar los campos
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
  const services = document.querySelectorAll('input[name="services"]:checked');

  // Validaciones
  if (!name) {
    alert('El campo "Nombre" es obligatorio.');
    return;
  }

  if (!email) {
    alert('El campo "Email" es obligatorio.');
    return;
  } else if (!validateEmail(email)) {
    alert('Por favor, introduce un correo electrónico válido.');
    return;
  }

  if (!phone) {
    alert('El campo "Teléfono" es obligatorio.');
    return;
  }

  if (!message) {
    alert('El campo "Mensaje" es obligatorio.');
    return;
  }

  if (services.length === 0) {
    alert('Por favor, selecciona al menos un servicio.');
    return;
  }

  // Si todo está bien, enviar el formulario
  alert('Formulario enviado con éxito.');
  // Aquí puedes enviar el formulario usando AJAX o simplemente permitir que se envíe de la manera normal
  // this.submit();
});

function validateEmail(email) {
  // Expresión regular para validar el formato del correo electrónico
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
