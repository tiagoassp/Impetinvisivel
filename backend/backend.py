from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.application import MIMEApplication
from decouple import config

app = Flask(__name__)


SMTP_HOST = config('SMTP_HOST')
SMTP_PORT = int(config('SMTP_PORT'))
SMTP_USERNAME = config('SMTP_USERNAME')
SMTP_PASSWORD = int(config('SMTP_PASSWORD'))

@app.route('/contact', methods=['POST'])
def send_email():
    try:
        # Get data from the POST request (assuming it's sent as JSON)
        data = request.get_json()

        subject = data.get('subject')
        sender_email = data.get('sender_email')
        recipient_email = data.get('recipient_email')
        message = data.get('message')

        # Create a MIMEText object for the email body
        email_body = MIMEMultipart()
        email_body.attach(MIMEText(message, 'plain'))

        # Create an SMTP connection
        smtp_server = smtplib.SMTP(SMTP_HOST, SMTP_PORT)

        # Login to your email account
        smtp_server.login(SMTP_USERNAME, SMTP_PASSWORD)

        # Send the email
        smtp_server.sendmail(sender_email, recipient_email, email_body.as_string())

        # Close the SMTP connection
        smtp_server.quit()

        return jsonify({"message": "Email sent successfully"})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
