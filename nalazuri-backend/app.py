from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.email_handler import send_inquiry_email

app = Flask(__name__)
CORS(app)

@app.route('/api/inquiry', methods=['POST'])
def inquiry():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data received"}), 400

        success = send_inquiry_email(data)

        if success:
            return jsonify({"message": "Email sent successfully!"}), 200
        else:
            return jsonify({"error": "Failed to send email"}), 500

    except Exception as e:
        print(" Backend error:", e)
        return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    # Runs locally on http://localhost:5000
    app.run(host="0.0.0.0", port=5000, debug=True)
