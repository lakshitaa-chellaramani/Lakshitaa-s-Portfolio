document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission
  
    var formData = new FormData(this);
  
    fetch('/submit-form', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Error sending message.');
    });
  });

  require('dotenv').config();

const nodemailer = require('nodemailer');



const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

