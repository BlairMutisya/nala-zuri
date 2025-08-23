from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.email_handler import send_inquiry_email
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/inquiry', methods=['POST'])
def inquiry():
    try:
        data = request.get_json()  # Get the incoming form data
        if not data:
            return jsonify({"error": "No data provided"}), 400

        if send_inquiry_email(data):  # Send email using the provided data
            return jsonify({"message": "Email sent successfully!"}), 200
        else:
            return jsonify({"error": "Failed to send email"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Render requires using PORT env
    app.run(host="0.0.0.0", port=port, debug=True)  
