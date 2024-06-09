document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a[href^="#"], footer a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle menu for mobile
    window.toggleMenu = function() {
        const navLinks = document.getElementById('navLinks');
        if (navLinks.className === 'nav-links') {
            navLinks.className += ' responsive';
        } else {
            navLinks.className = 'nav-links';
        }
    };

    // Google Maps initialization
    window.initMap = function() {
        const location = { lat: 40.712776, lng: -74.005974 }; // Example location: New York
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: location
        });
        const marker = new google.maps.Marker({
            position: location,
            map: map
        });
    };

    // Form validation
    window.validateForm = function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('All fields are required.');
            return false;
        }

        alert('Form submitted successfully!');
        return true;
    };
});
