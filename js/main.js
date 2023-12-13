const titles = ['>App developer 👩‍💻','>UI Designer', '>Web Developer'];
let currentTitle = 0;
let currentChar = 0;
let deleting = false;

const subtitle = document.getElementById('rotating-text');

function updateText() {
  if (deleting) {
    // Reduce el número de caracteres si está en modo "borrar"
    if (currentChar > 0) {
      currentChar--;
      subtitle.textContent = titles[currentTitle].substring(0, currentChar);
    } else {
      // Cambia al siguiente título y cambia el modo a "escribir"
      deleting = false;
      currentTitle = (currentTitle + 1) % titles.length;
    }
  } else {
    // Aumenta el número de caracteres si está en modo "escribir"
    if (currentChar < titles[currentTitle].length) {
      currentChar++;
      subtitle.textContent = titles[currentTitle].substring(0, currentChar);
    } else {
      // Comienza a borrar después de un retraso cuando se ha terminado de escribir
      setTimeout(() => { deleting = true; }, 2000);
    }
  }
}

// Iniciar la actualización del texto
setInterval(updateText, 200); // Ajusta la velocidad de tipeo y borrado aquí

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarItems = document.querySelectorAll('.sidebar-item');

  function changeSidebarColor(colorClass) {
    // Eliminar solo las clases de color de fondo
    sidebar.classList.remove('sidebar-highlight-about', 'sidebar-highlight-projects', 'sidebar-highlight-contact');
    // Añadir la nueva clase de color de fondo
    sidebar.classList.add(colorClass);
  }
  

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      // Decide qué clase de color agregar en función del ID del ítem clickeado
      switch (item.id) {
        case 'link-about-me':
          changeSidebarColor('sidebar-highlight-about');
          break;
        case 'link-projects':
          changeSidebarColor('sidebar-highlight-projects');
          break;
        case 'link-contact':
          changeSidebarColor('sidebar-highlight-contact');
          break;
        
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Elementos de la barra lateral
  const aboutMeLink = document.getElementById('link-about-me');
  const projectsLink = document.getElementById('link-projects');
  const contactLink = document.getElementById('link-contact');

  // Contenedores de contenido
  const centeredContent = document.getElementById('centered-content');
  const aboutMeView = document.getElementById('about-me-view');
  const projectsView = document.getElementById('proyects-view');
  const contactIcons = document.getElementById('contact-icons');

  // Función para mostrar un elemento y ocultar los demás
  function showElement(elementIdToShow) {
    // Array con todos los posibles ID de elementos a mostrar/ocultar
    const allElements = ['centered-content', 'about-me-view', 'proyects-view', 'contact-icons'];

    // Ocultar todos los elementos
    allElements.forEach(elementId => {
      const element = document.getElementById(elementId);
      element.classList.add('hidden');
    });

    // Mostrar solo el elemento relevante
    const elementToShow = document.getElementById(elementIdToShow);
    elementToShow.classList.remove('hidden');
  }

  aboutMeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showElement('about-me-view');
  });

  projectsLink.addEventListener('click', (e) => {
    e.preventDefault();
    showElement('proyects-view');
  });

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    showElement('contact-icons');
  });
});

document.querySelectorAll('.card-container').forEach((card) => {
  card.addEventListener('click', () => {
    card.querySelector('.card-flip').classList.toggle('is-flipped');
  });
});

// Función para mostrar u ocultar los íconos de contacto
function toggleContactIcons(shouldShow) {
  const contactIcons = document.getElementById('contact-icons');
  if (shouldShow) {
    contactIcons.classList.remove('hidden');
  } else {
    contactIcons.classList.add('hidden');
  }
}

// Llama a esta función cada vez que se cambie la sección, por ejemplo:
toggleContactIcons(true); // Para mostrar en la sección de contacto
toggleContactIcons(false); // Para ocultar en otras secciones







