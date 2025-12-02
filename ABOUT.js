// script.js

// Tab Functionality for Mission/Vision
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to current button and corresponding pane
            button.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// Read More Toggle Function for Team Bios
function toggleBio(button) {
    const teamMember = button.closest('.team-member');
    const bioShort = teamMember.querySelector('.bio-short');
    const bioFull = teamMember.querySelector('.bio-full');
    const icon = button.querySelector('i');

    if (bioFull.style.display === 'none') {
        bioFull.style.display = 'inline';
        bioShort.style.display = 'none';
        button.textContent = 'Read Less ';
        button.classList.add('active');
    } else {
        bioFull.style.display = 'none';
        bioShort.style.display = 'block';
        button.textContent = 'Read More ';
        button.classList.remove('active');
    }
    // Append the icon back to the button after changing text
    button.appendChild(icon);
}