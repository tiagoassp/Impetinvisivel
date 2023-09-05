function sendEmail() {
    const emailData = {
        subject: document.getElementById("title").value,
        sender_email: "your_sender_email@gmail.com",
        recipient_email: "geral.impetinvisivel@gmail.com",
        message: "Name: " + document.getElementById("title").value +
                 "\nEmail: " + document.getElementById("email").value +
                 "\nMessage: "  + document.getElementById("message").value
    };
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse JSON if the response is OK
        } else {
            throw new Error('Network response was not OK');
        }
    })
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
    
}
