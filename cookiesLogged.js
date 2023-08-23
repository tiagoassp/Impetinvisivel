document.addEventListener("DOMContentLoaded", function() {
    const normalLinks = document.querySelectorAll(".normal");
    const loggedLinks = document.querySelectorAll(".logged");

    if (document.cookie.includes("isLoggedIn=true")) {
        // User is logged in, show the "logged" links, hide the "normal" links
        normalLinks.forEach(link => {
            link.style.display = "none";
        });
        loggedLinks.forEach(link => {
            link.style.display = "inline-block";
        });
    } else {
        // User is not logged in, show the "normal" links, hide the "logged" links
        normalLinks.forEach(link => {
            link.style.display = "inline-block";
        });
        loggedLinks.forEach(link => {
            link.style.display = "none";
        });
    }
});
