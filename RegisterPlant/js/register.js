document.getElementById('registerBtn').onclick = async function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('registerError');
    errorDiv.textContent = '';
    try {
        const res = await fetch('http://localhost:8080/api/v1/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
            window.location.href = '../../sing-in/pages/login.html';
        } else {
            errorDiv.textContent = data.message || 'Registration failed';
        }
    } catch (e) {
        errorDiv.textContent = 'Network error';
    }
};
