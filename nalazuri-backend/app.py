from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.email_handler import send_inquiry_email
from threading import Thread

app = Flask(__name__)
CORS(app)

def async_send_email(data):
    """Run email sending in the background"""
    send_inquiry_email(data)

@app.route('/api/inquiry', methods=['POST'])
def inquiry():
    try:
        data = request.get_json()

        if not data:
            return jsonify({"error": "No data received"}), 400

        # Start background thread for email sending
        Thread(target=async_send_email, args=(data,), daemon=True).start()

        # Respond immediately (no waiting for email)
        return jsonify({"message": "Inquiry received! We'll be in touch shortly."}), 200

    except Exception as e:
        print(" Backend error:", e)
        return jsonify({"error": "Internal server error"}), 500


if __name__ == "__main__":
    # Runs locally on http://localhost:5000
    app.run(host="0.0.0.0", port=5000, debug=True)
