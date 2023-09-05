function sendEmail() {
    // Make an HTTP GET request to fetch the text file
    fetch('/backend/file.txt') // Replace with the actual URL of your text file
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.text();
        })
        .then((textData) => {
            // Split the text data into lines
            const lines = textData.split('\n');

            // Create an object to store the configuration
            const config = {};
            lines.forEach((line) => {
                const parts = line.split(':').map((s) => s.trim());
                if (parts.length === 2) {
                    const key = parts[0];
                    const value = parts[1];
                    config[key] = value;
                }
            });

            // Fetch the form input values
            const titleValue = document.getElementById('title').value;
            const emailValue = document.getElementById('email').value;
            const messageValue = document.getElementById('message').value;

            Email.send({
                Host: config["Host"],
                Username: config["Username"],
                Password: config["Password"],
                To: config["To"],
                From: config["From"],
                Subject: titleValue,
                Body:
                    'Name: ' + titleValue +
                    '<br> Email: ' + emailValue +
                    '<br> Message: ' + messageValue,
            }).then((message) => {
                alert(message);
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
