// Año en footer
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.querySelector('.nav__toggle');
const navList = document.getElementById('navList');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Toggle modo oscuro/claro
const darkMode = document.getElementById("themeSwitcher");
const body = document.body;

darkMode.addEventListener("click", () => {
  body.classList.toggle("active");
  localStorage.setItem("theme", body.classList.contains("active") ? "dark" : "light");
});

// Cargar preferencia guardada
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") body.classList.add("active");

// Formulario mailto
const form = document.getElementById('mailForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('mensaje').value.trim();

    const asunto = encodeURIComponent('Consulta desde la web ETN35');
    const cuerpo = encodeURIComponent(`De: ${email}\n\nMensaje:\n${msg}`);
    window.location.href = `mailto:contacto@example.com?subject=${asunto}&body=${cuerpo}`;
  });
}
