const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const signUpBtn = document.getElementById('signUp');
    const signInBtn = document.getElementById('signIn');
    const signUpContainer = document.querySelector('.sign-up-container');
    const signInContainer = document.querySelector('.sign-in-container');

    if (signUpBtn && signInBtn && signUpContainer && signInContainer) {
        signUpBtn.addEventListener('click', () => {
            container.classList.add('right-panel-active');
        });

        signInBtn.addEventListener('click', () => {
            container.classList.remove('right-panel-active');
        });
    }
});
