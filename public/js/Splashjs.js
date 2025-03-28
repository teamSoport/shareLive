
        const splash = document.getElementById('splash');
        const container = document.querySelector('.container');

        window.addEventListener('load', () => {
            setTimeout(() => {
                splash.style.display = 'none';
                container.style.display = 'block';
            }, 3000); // Simulate 3 seconds of loading
        });

        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const toggleFormLink = document.getElementById('toggle-form');
        const formTitle = document.getElementById('form-title');

        toggleFormLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (loginForm.style.display === 'none') {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
                formTitle.textContent = 'Login';
                toggleFormLink.textContent = "Don't have an account? Register";
            } else {
                loginForm.style.display = 'none';
                registerForm.style.display = 'block';
                formTitle.textContent = 'Register';
                toggleFormLink.textContent = 'Already have an account? Login';
            }
        });
