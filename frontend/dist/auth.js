"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if (usernameInput) {
        usernameInput.oninvalid = function (event) {
            event.target.setCustomValidity('Please enter your username.');
        };
        usernameInput.oninput = function (event) {
            event.target.setCustomValidity('');
        };
    }
    if (passwordInput) {
        passwordInput.oninvalid = function (event) {
            event.target.setCustomValidity('Please enter your password.');
        };
    }
});
//# sourceMappingURL=auth.js.map