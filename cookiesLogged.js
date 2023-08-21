document.addEventListener("DOMContentLoaded", function() {
    const normalLink = document.getElementById("normal");
    const loggedLink = document.getElementById("logged");

    if (document.cookie.includes("isLoggedIn=true")) {
        // User is logged in, show the "logged" link, hide the "normal" link
        normalLink.style.display = "none";
        loggedLink.style.display = "inline-block";
    } else {
        // User is not logged in, show the "normal" link, hide the "logged" link
        normalLink.style.display = "inline-block";
        loggedLink.style.display = "none";
    }
});
