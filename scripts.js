document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.about-me-text, .about-me-image, .skill, .projects-content, .skills h1, .contact-info, .contact-image, .contact-footer');

    // Initially add 'hidden' class to all elements
    elementsToAnimate.forEach(element => {
        element.classList.add('hidden');
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('scale-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.55
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

function scrollToHome() {
    const contactSection = document.getElementById('home');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAboutMe() {
    const contactSection = document.getElementById('about-me');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToSkills() {
    const contactSection = document.getElementById('skills');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
    const contactSection = document.getElementById('projects');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
    const contactSection = document.getElementById('contact-me');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}