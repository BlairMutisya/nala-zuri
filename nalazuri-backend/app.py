from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.email_handler import send_inquiry_email
import os 

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
    # Get port from environment variable or default to 5000
    port = int(os.environ.get('PORT', 5000))
    # Bind to 0.0.0.0 to make it accessible externally
    app.run(host='0.0.0.0', port=port, debug=True)