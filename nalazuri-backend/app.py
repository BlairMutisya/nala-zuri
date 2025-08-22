from flask import Flask, request, jsonify
from flask_cors import CORS
from utils.email_handler import send_inquiry_email


app = Flask(__name__)
CORS(app)

@app.route('/api/send_inquiry', methods=['POST'])
def send_inquiry():
    try:
        data = request.json
        if not data:
            return jsonify({"success": False, "error": "No data provided"}), 400

        success = send_inquiry_email(data)
        if success:
            return jsonify({"success": True, "message": "Email sent successfully"})
        else:
            return jsonify({"success": False, "error": "Failed to send email"}), 500

    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5000, debug=True)