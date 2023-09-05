function sendEmail() {
    const emailData = {
        subject: document.getElementById("title").value,
        sender_email: "your_sender_email@gmail.com",
        recipient_email: "geral.impetinvisivel@gmail.com",
        message: "Name: " + document.getElementById("title").value +
                 "\nEmail: " + document.getElementById("email").value +
                 "\nMessage: "  + document.getElementById("message").value
    };

    // Send a POST request to the server
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
