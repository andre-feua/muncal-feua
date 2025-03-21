document.addEventListener('DOMContentLoaded', () => {
    const accountLink = document.getElementById('account-link');
    const loggedInEmail = localStorage.getItem('loggedInEmail');

    console.log('accountLink:', accountLink);
    console.log('loggedInEmail:', loggedInEmail);

    if (loggedInEmail) {
        accountLink.textContent = loggedInEmail;
    }
});