// Smooth scroll functionality when clicking on the "Get Started" button
document.querySelector('.cta-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor link behavior

    // Scroll to the services section smoothly
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth'
    });
});
