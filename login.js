document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameOrEmail = document.getElementById('usernameOrEmail').value;
        const password = document.getElementById('password').value;

        // Authenticate user (for demonstration, using localStorage)
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password) {
            alert('Login successful!');
            localStorage.setItem('loggedInUser', user.username); // Store logged-in username

            // Redirect to the page the user was on before login/signup
            const redirectPage = localStorage.getItem('redirectPage') || 'index.html'; // Default to home
            window.location.href = redirectPage;
        } else {
            alert('Invalid username or password');
        }
    });
});
