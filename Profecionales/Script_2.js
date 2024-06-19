document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeButtons = document.querySelectorAll(".close-modal, #menu .dropdown-item");
    const modalToggle = document.getElementById("open-modal");
    const modal = document.getElementById("modal");
    const dropdownBtns = document.querySelectorAll(".dropdown-btn");

    menuToggle.addEventListener("click", function() {
        sidebar.classList.toggle("active");
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", function() {
            sidebar.classList.remove("active");
            modal.style.display = "none";
        });
    });

    modalToggle.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    dropdownBtns.forEach(button => {
        button.addEventListener("click", function() {
            this.classList.toggle("active");
            const dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "flex") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "flex";
            }
        });
    });
});
