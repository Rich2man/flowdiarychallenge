
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let valid = true;
        let message = '';

        // Check if fields are empty
        if (!email || !password) {
            valid = false;
            message = 'Both fields are required.';
        } else {
            // Email validation regex
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                valid = false;
                message = 'Please enter a valid email address.';
            }
        }

        if (!valid) {
            alert(message);
        } else {
            // Proceed with form submission or further logic
            alert('Login successful!');
        }
    });
});
