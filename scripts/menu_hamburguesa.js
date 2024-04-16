// Exporta una función llamada "hamburguerMenu" como el valor predeterminado del módulo
export default function hamburguerMenu(panelBtn, panel, menuLink) {
    // Obtiene el documento actual y lo asigna a la variable d
    const d = document;
  
    // Añade un event listener que escucha el evento "click" en todo el documento
    d.addEventListener("click", (e) => {
      // Verifica si el elemento clickeado coincide con el selector del botón del panel o sus hijos
      if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
        // Si es así, toggle (activa o desactiva) la clase "is-active" en el panel y el botón del panel
        d.querySelector(panel).classList.toggle("is-active");
        d.querySelector(panelBtn).classList.toggle("is-active");
      }
      // Verifica si el elemento clickeado coincide con el selector de los enlaces del menú
      if (e.target.matches(menuLink)) {
        // Si es así, remueve la clase "is-active" del panel y del botón del panel para cerrar el menú
        d.querySelector(panel).classList.remove("is-active");
        d.querySelector(panelBtn).classList.remove("is-active");
      }
    });
  }