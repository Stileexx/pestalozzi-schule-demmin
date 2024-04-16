// Funktion zum Zeigen des Hauptmenüs
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

  // Hauptmenü-Toggle Event Listener
  if (toggle) {
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu');
      });
  }
};

// Funktion zum Toggeln des Submenüs
const setupSubmenuToggles = () => {
  const nav = document.getElementById('nav-menu');
  const dropdownLinks = nav.querySelectorAll('.dropdown__link');
  
  dropdownLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          const parentItem = link.parentElement;
          const submenu = parentItem.querySelector('.dropdown__submenu');
          if (submenu) {
              submenu.classList.toggle('submenu-show');
              event.preventDefault(); // Verhindern des Standard-Linkverhaltens
          }
      });
  });
};

// Funktionen initialisieren
showMenu('nav-toggle', 'nav-menu');
setupSubmenuToggles();
