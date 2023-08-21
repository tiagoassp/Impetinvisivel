function operadorLogin() {
    let name = document.getElementById("name-login").value;
    let errorMessage = document.getElementById("error-message");
    let password = document.getElementById("password-login").value;
    if (name === "operador" && password === "alex44") {
        errorMessage.style.display = "none";
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (60 * 60 * 1000)); // 1 hour in milliseconds
        document.cookie = `isLoggedIn=true; expires=${expirationDate.toUTCString()}; path=/`;
        window.location.href = 'aboutUs.html';
    } else {
        errorMessage.style.display = "block";
        errorMessage.classList.add(".error-show");
    }
}