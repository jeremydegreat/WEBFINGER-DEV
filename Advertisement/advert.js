// Mobile menu toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const menuBtn = document.querySelector('.menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            if (menuBtn) {
                menuBtn.addEventListener('click', function() {
                    navLinks.classList.toggle('active');
                });
            }
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        });