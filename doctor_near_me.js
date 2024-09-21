let selectedDoctor = "";
let selectedTime = "";

// Check if User is Logged In
function isUserLoggedIn() {
    return localStorage.getItem('loggedInUser') !== null;
}

// Event Listener for Appointment Button
document.querySelectorAll('.appointment-btn').forEach(button => {
    button.addEventListener('click', () => {
        if (isUserLoggedIn()) {
            selectedDoctor = button.getAttribute('data-doctor');
            showAppointmentModal(selectedDoctor);
        } else {
            // Store the current page to redirect back after login/signup
            localStorage.setItem('redirectPage', window.location.href);
            window.location.href = 'login.html'; // Change to your actual login page
        }
    });
});

// Show Appointment Modal
function showAppointmentModal(doctor) {
    selectedTime = generateRandomTime();
    document.getElementById('appointmentDetails').innerText = 
        `You are booking an appointment with ${doctor}.\nYour appointment time is ${selectedTime}.`;
    document.getElementById('appointmentModal').style.display = 'flex';
}

// Generate Random Appointment Time
function generateRandomTime() {
    const hours = Math.floor(Math.random() * (17 - 9) + 9); // Random hour between 9 AM and 5 PM
    const minutes = Math.random() > 0.5 ? '00' : '30'; // Either on the hour or half past
    return `${hours}:${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
}

// Close Modal
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none';
    });
});

// Confirm Appointment Button
document.getElementById('confirmAppointmentBtn').addEventListener('click', () => {
    alert(`Your appointment with ${selectedDoctor} is confirmed at ${selectedTime}.`);
    document.getElementById('appointmentModal').style.display = 'none';
});

// Update User Status in Header
function updateUserStatus() {
    const username = localStorage.getItem('loggedInUser');
    if (username) {
        document.getElementById('userAuth').innerHTML = `<a href="#">Hello, ${username}</a>`;
    } else {
        document.getElementById('userAuth').innerHTML = `<a href="signup.html">Login | Sign Up</a>`;
    }
}

// Initialize User Status when page loads
window.onload = function() {
    updateUserStatus();
};
