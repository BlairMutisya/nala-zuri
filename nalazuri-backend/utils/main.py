from email_handler import send_inquiry_email

sample_inquiry = {
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane@example.com",
    "phone": "+1234567890",
    "firstTimeAfrica": "Yes",
    "firstTimeKenya": "Yes",
    "travelDate": "2025-09-15",
    "travelDuration": "10 days",
    "referralSource": "Instagram",
    "inquiryType": "booking",
    "dreamList": "- Maasai Mara\n- Amboseli\n- Diani Beach"
}

send_inquiry_email(sample_inquiry)
