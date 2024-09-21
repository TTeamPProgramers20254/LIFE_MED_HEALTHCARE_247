document.addEventListener('DOMContentLoaded', function() {
    const userInfo = document.getElementById('user-info');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        userInfo.innerHTML = `Hello, ${user.username} | <a href="logout.html">Logout</a>`;
    } else {
        userInfo.innerHTML = '<a href="login.html">Login</a> | <a href="signup.html">Sign Up</a>';
        
        // Redirect to login/signup if user is not authenticated
        if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
            // Redirect only if on the main page
            setTimeout(function() {
                window.location.href = 'login.html';
            }, 3000); // Adjust timeout as needed
        }
    }
});
