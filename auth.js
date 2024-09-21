document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (username && email && password) {
                // Store user data in localStorage (for demonstration purposes)
                localStorage.setItem('user', JSON.stringify({ username, email, password }));

                // Redirect to home or another page
                window.location.href = 'home.html';
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Display user info if logged in
    const userInfo = document.getElementById('user-info');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userInfo.textContent = `Hello, ${user.username}`;
        userInfo.insertAdjacentHTML('beforeend', ' | <a href="logout.html">Logout</a>');
    }
});
