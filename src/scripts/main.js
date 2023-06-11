document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    hamburgerMenu.addEventListener('click', function() {
        sidebar.classList.add('open');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('open');
        this.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

