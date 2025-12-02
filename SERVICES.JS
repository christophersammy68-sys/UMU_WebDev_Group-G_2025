// Mobile Menu Toggle
function toggleMenu() {
    let menu = document.getElementById("menuList");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Toggle Details in Service Cards
function toggleDetails(button) {
    let info = button.previousElementSibling;

    if (info.style.display === "none") {
        info.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        info.style.display = "none";
        button.textContent = "View Details";
    }
}
