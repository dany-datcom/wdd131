// ✅ Mostrar año actual
document.getElementById("currentyear").textContent = new Date().getFullYear();

// ✅ Mostrar última fecha de modificación
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// ✅ Funcionalidad del menú hamburguesa
const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  // Cambia el ícono entre ☰ y ✖
  menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
});