// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    }
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('section, .timeline-item, .skill-category, .project-card');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            element.classList.add('active');
            if (element.style.opacity === '0' || element.style.opacity === '') {
                element.animate([
                    { opacity: 0, transform: 'translateY(30px)' },
                    { opacity: 1, transform: 'translateY(0)' }
                ], {
                    duration: 600,
                    easing: 'ease-out',
                    fill: 'forwards'
                });
            }
        }
    });
};

// Initial state for reveal elements
revealElements.forEach(el => {
    el.style.opacity = '0';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Mobile menu toggle (simple version)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
        // Add CSS for mobile-active via script if not in styles.css
        <script src="script.js"></script>
        if (navLinks.classList.contains('mobile-active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'var(--bg-dark)';
            navLinks.style.padding = '2rem';
            navLinks.style.borderBottom = '1px solid var(--primary)';
        } else {
            navLinks.style.display = 'none';
        }
    });
}

// Form submission (prevent default for demo)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message, Mahendran will get back to you soon!');
        contactForm.reset();
    });
}
