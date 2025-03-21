document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signup-button');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="psw"]');
    const repeatPasswordInput = document.querySelector('input[name="psw-repeat"]');
    const rememberMeCheckbox = document.querySelector('input[name="remember"]');

    signupButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value;
        const password = passwordInput.value;
        const repeatPassword = repeatPasswordInput.value;
        const rememberMe = rememberMeCheckbox.checked;

        // Basic Validation
        if (!email || !password || !repeatPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Data Handling (Console Logging and localStorage)
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);

        const userData = {
            email: email,
            password: password, // Never store passwords directly!
            rememberMe: rememberMe
        };
        localStorage.setItem('user', JSON.stringify(userData));

        alert('Sign up successful! (Data logged to console and stored in localStorage)');
    });
});