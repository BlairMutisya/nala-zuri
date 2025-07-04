import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")

def determine_recipient(inquiry_type):
    recipients = {
        "general": "info@nalazuritravels.com",
        "booking": "bookings@nalazuritravels.com",
        "support": "support@nalazuritravels.com",
        "mercy": "mercy@nalazuritravels.com",
        "teressa": "teressa@nalazuritravels.com"
    }
    return recipients.get(inquiry_type.lower(), "info@nalazuritravels.com")

def send_inquiry_email(data):
    recipient_email = determine_recipient(data.get("inquiryType", "general"))

    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = recipient_email
    msg['Subject'] = f"New Safari Inquiry: {data.get('fullName', 'Unknown')}"

    body = f"""
🐘 New Safari Inquiry 🐘

Full Name: {data.get('fullName', '')}
Email: {data.get('email', '')}
Phone: {data.get('phone', '')}
Country: {data.get('country', '')}
Preferred Contact Method: {data.get('contactMethod', '')}
Dates: {data.get('fromDate', '')} to {data.get('toDate', '')}
Flexible Dates: {data.get('flexibleDates', '')}
Trip Duration: {data.get('tripDuration', '')}
Destinations: {', '.join(data.get('destinations', []))}
Experiences: {', '.join(data.get('experiences', []))}
Custom Experience: {data.get('customExperience', '')}
Accommodation: {data.get('accommodation', '')}
Travelers: {data.get('travelers', '')}
Children in Group: {data.get('hasChildren', '')}
Children Ages: {data.get('childrenAges', '')}

Values:
  - Supporting local communities: {data.get('values', {}).get('localSupport', 'N/A')}/5
  - Sustainable and eco-friendly travel: {data.get('values', {}).get('ecoTravel', 'N/A')}/5
  - Cultural immersion and learning: {data.get('values', {}).get('culture', 'N/A')}/5
  - Comfort and relaxation: {data.get('values', {}).get('comfort', 'N/A')}/5

Notes: {data.get('notes', '')}

-------------------------
Sent via Nalazuri Website Form
    """

    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            smtp.login(SENDER_EMAIL, SENDER_PASSWORD)
            smtp.send_message(msg)
        print("✅ Email sent successfully.")
        return True
    except Exception as e:
        print(f" Error sending email: {e}")
        return False
