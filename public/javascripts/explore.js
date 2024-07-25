document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');
    for (const link of links) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            if (!targetId.startsWith('#')) {
                window.location.href = targetId;
            }
        });
    }

    // Dynamic Content Interaction
    const features = document.querySelectorAll('.features .feature');
    features.forEach(feature => {
        feature.addEventListener('click', () => {
            alert(`Discover the perfect blend of comfort, elegance, and flair with our collection of ${feature.querySelector('h2').textContent} designed to elevate every aspect of your wardrobe.`);
        });
    });
    
    // Highlight current section in navbar
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('class');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    });
});
