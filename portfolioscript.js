document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for active navigation link
    const sections = document.querySelectorAll('.portfolio-section, #hero-section');
    const navLinks = document.querySelectorAll('#navbar a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                const currentSectionId = entry.target.id;
                const activeLink = document.querySelector(`#navbar a[href="#${currentSectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    const profileCards = document.querySelectorAll('.movie-card');
    const netflixSound = document.getElementById('netflix-sound');

    profileCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            // Check if the audio element exists before trying to play it
            if (netflixSound) {
                netflixSound.play();
            }

            setTimeout(() => {
                window.location.href = card.href;
            }, 500);
        });
    });
});