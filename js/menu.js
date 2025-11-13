document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle untuk perangkat mobile
    const menuToggle = document.querySelector('.elementor-menu-toggle');
    const menu = document.querySelector('.elementor-nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('elementor-nav-menu--main');
        });
    }

    // Dropdown toggle di desktop
    const menuItemsWithDropdown = document.querySelectorAll('.menu-item-has-children > a');
    menuItemsWithDropdown.forEach(item => {
        item.addEventListener('click', (e) => {
            const subMenu = item.nextElementSibling;
            if (subMenu && subMenu.classList.contains('elementor-nav-menu--dropdown')) {
                subMenu.classList.toggle('elementor-nav-menu--dropdown');
                e.preventDefault(); // Prevent link redirect
            }
        });
    });
});
