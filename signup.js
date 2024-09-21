document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const email = document.getElementById('email').value; // Include email

        // Register user (for demonstration, using localStorage)
        localStorage.setItem('user', JSON.stringify({ username, password, email }));
        alert('Sign up successful! You can now log in.');

        // Redirect to login page
        window.location.href = 'login.html'; // Change to your desired page
    });
});
