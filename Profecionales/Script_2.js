
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}

// Menu deslizante
function openNav() {
    document.getElementById("mySideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySideMenu").style.width = "0";
}

// Manejar dropdowns del menú lateral
function toggleDropdown(event) {
    const button = event.target;
    const dropdown = button.nextElementSibling;

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Parte 2 del menú
function openMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("open");
    sideMenu.classList.remove("close");
}

function closeMenu() {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("close");
    sideMenu.classList.remove("open");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    openBtn.addEventListener('click', () => {
        openMenu();
    });

    closeBtn.addEventListener('click', () => {
        closeMenu();
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleDropdown);
    });
});
