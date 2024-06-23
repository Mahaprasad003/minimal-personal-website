// script.js
document.addEventListener("DOMContentLoaded", function () {
    function loadContent(page) {
        fetch(page + '.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Load home content by default
    loadContent('home');
});
