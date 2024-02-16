const navtoggle = document.querySelector(".navtoggle");
const navmenu = document.querySelector(".navmenu");

navtoggle.addEventListener("click", () => {
    navmenu.classList.toggle("navmenu_activacion");

    if (navmenu.classList.contains("navmenu_activation")) {
        navtoggle.setAttribute("arialabel", "Cerrar Manú");
     } else{
            navtoggle.setAttribute("aria-label", "Abrir Menú");
        }
    });
