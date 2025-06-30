from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.email_handler import send_inquiry_email


app = Flask(__name__)
CORS(app)

@app.route('/api/inquiry', methods=['POST'])
def inquiry():
    data = request.get_json()  # Get the incoming form data

    if send_inquiry_email(data):  # Send email using the provided data
        return jsonify({"message": "Email sent successfully!"}), 200  # Return success response
    else:
        return jsonify({"error": "Failed to send email"}), 500  # Error response if email failed

if __name__ == '__main__':
    app.run(debug=True)
