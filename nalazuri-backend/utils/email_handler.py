# email_handler.py
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

def send_inquiry_email(data):
    try:
        sender_email = os.environ.get("SENDER_EMAIL")
        sender_password = os.environ.get("SENDER_PASSWORD")

        if not sender_email or not sender_password:
            print("Missing SENDER_EMAIL or SENDER_PASSWORD in .env")
            return False

        traveler_email = data.get("email")  # email from form
        receiver_email = sender_email       # your inbox (you receive inquiries)

        
        # 1) Email TO YOU
        
        subject_owner = f"New Safari Inquiry from {data.get('fullName')}"
        body_owner = f"""
        You have received a new safari inquiry:

        Name: {data.get('fullName')}
        Email: {data.get('email')}
        Phone: {data.get('phone')}
        Country: {data.get('country')}
        Preferred Contact: {data.get('contactMethod')} ({data.get('otherContactMethod')})
        Travel Dates: {data.get('fromDate')} to {data.get('toDate')}
        Flexible Dates: {data.get('flexibleDates')}
        Trip Duration: {data.get('tripDuration')}

        Destinations: {", ".join(data.get('destinations', []))}
        Experiences: {", ".join(data.get('experiences', []))}
        Custom Experience: {data.get('customExperience')}

        Accommodation: {data.get('accommodation')}
        Travelers: {data.get('travelers')}
        Has Children: {data.get('hasChildren')}
        Children Ages: {data.get('childrenAges')}

        Values:
            - Local Support: {data.get('values', {}).get('localSupport')}
            - Eco Travel: {data.get('values', {}).get('ecoTravel')}
            - Culture: {data.get('values', {}).get('culture')}
            - Comfort: {data.get('values', {}).get('comfort')}

        Notes:
        {data.get('notes')}
        """

        msg_owner = MIMEMultipart()
        msg_owner["From"] = sender_email
        msg_owner["To"] = receiver_email
        msg_owner["Subject"] = subject_owner
        msg_owner.attach(MIMEText(body_owner, "plain"))

        
        # 2) Email TO TRAVELER
        
        subject_traveler = "Thank you for your Safari Inquiry with Nalazuri Travels"
        body_traveler = f"""
        Hi {data.get('fullName')},

        Thank you for reaching out to Nalazuri Travels!🎉
        We’ve received your safari inquiry and our team is excited to craft a personalized safari experience for you.
        One of our safari experts will review your preferences and get back to you shortly with a tailored proposal.
        In the meantime, if you have any urgent questions, feel free to reply to this email.

        Best regards,  
        The Nalazuri Travels Team
        """

        msg_traveler = MIMEMultipart()
        msg_traveler["From"] = sender_email
        msg_traveler["To"] = traveler_email
        msg_traveler["Subject"] = subject_traveler
        msg_traveler.attach(MIMEText(body_traveler, "plain"))

        
        # Send both emails via Gmail
        
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)

        # send to you
        server.sendmail(sender_email, receiver_email, msg_owner.as_string())
        # send confirmation to traveler
        if traveler_email:
            server.sendmail(sender_email, traveler_email, msg_traveler.as_string())

        server.quit()

        print("Inquiry + confirmation emails sent successfully")
        return True

    except Exception as e:
        print("Error sending emails:", e)
        return False
