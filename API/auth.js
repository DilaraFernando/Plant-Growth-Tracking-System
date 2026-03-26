function getToken() {
    return localStorage.getItem("jwt_token");
}

function isLoggedIn() {
    const token = getToken();
    return token !== null && token !== "";
}

function logout() {
    localStorage.removeItem("jwt_token");
    window.location.href = "../../sing-in/pages/sign-in.html";
}

function authHeaders() {
    return {
        "Authorization": "Bearer " + getToken(),
        "Content-Type": "application/json"
    };
}

window.auth = { getToken, isLoggedIn, logout, authHeaders };
