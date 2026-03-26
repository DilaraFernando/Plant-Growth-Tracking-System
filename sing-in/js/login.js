const loginBtn = document.getElementById('loginBtn');
loginBtn.onclick = async function() {
    loginBtn.disabled = true;
    const originalBtnText = loginBtn.textContent;
    loginBtn.textContent = 'Signing In...';
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('loginError');
    errorDiv.textContent = '';
    try {
        const res = await fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.status === 200 && data.data && data.data.accessToken) {
            localStorage.setItem('jwt_token', data.data.accessToken);
            window.location.href = '../../GrowthTrcakSection/pages/DashBoardPage.html';
        } else {
            errorDiv.textContent = data.message || 'Login failed';
        }
    } catch (e) {
        errorDiv.textContent = 'Network error: ' + e.message;
    }
    loginBtn.disabled = false;
    loginBtn.textContent = originalBtnText;
};
