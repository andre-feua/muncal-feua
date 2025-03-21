document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('login-button');
    const emailInput = document.querySelector('input[name="email"]'); // Changed to "email"
    const passwordInput = document.querySelector('input[name="psw"]');
    const accountLink = document.getElementById('account-link');

    loginButton.addEventListener('click', () => {
        const email = emailInput.value; // Changed to "email"
        const password = passwordInput.value;

        // Retrieve user data from localStorage
        const userData = JSON.parse(localStorage.getItem('user'));

        if (userData && userData.email === email && userData.password === password) { // Changed to "email"
            // Successful login
            alert('Login successful!');
            accountLink.textContent = email; // Changed to "email"
        } else {
            // Incorrect credentials
            alert('Incorrect email or password.'); // Changed to "email"
        }
    });
});