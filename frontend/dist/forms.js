"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const signUpBtn = document.getElementById('signUp');
    const signInBtn = document.getElementById('signIn');
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    if (signUpBtn && signInBtn && signUpForm && signInForm) {
        signUpBtn.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });
        signInBtn.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
        signUpForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            const formData = new FormData(signUpForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value.toString();
            });
            console.log('Sign Up Form Data:', data); // Log form data before sending
            try {
                const response = yield fetch('http://localhost:3000/api/auth/register', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = yield response.json();
                console.log(result);
            }
            catch (error) {
                console.error('Error:', error);
            }
        }));
        signInForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            const formData = new FormData(signInForm);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value.toString();
            });
            console.log('Sign In Form Data:', data); // Log form data before sending
            try {
                const response = yield fetch('http://localhost:3000/api/auth/login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = yield response.json();
                console.log(result);
                // Check if login was successful
                if (response.ok) {
                    // Save the token to local storage or cookies
                    localStorage.setItem('token', result.token);
                    // Redirect based on user role
                    if (result.role === 'superadmin') {
                        window.location.href = 'http://localhost:3001/admin-dashboard.html';
                    }
                    else {
                        window.location.href = 'http://localhost:3001/user-dashboard.html';
                    }
                }
            }
            catch (error) {
                console.error('Error:', error);
            }
        }));
    }
});
//# sourceMappingURL=forms.js.map