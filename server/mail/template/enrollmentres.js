exports.courseEnrollmentEmail = (courseName, name) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
 <meta charset="UTF-8">
    <title>Application Confirmation</title>
    <style>
        body {
            background-color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.4;
            color: #333333;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        .logo {
            max-width: 200px;
            margin-bottom: 20px;
        }

        .message {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .body {
            font-size: 16px;
            margin-bottom: 20px;
        }

        .cta {
            display: inline-block;
            padding: 10px 20px;
            background-color:  #CF0202;
            color: #000000;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
        }

        .support {
            font-size: 14px;
            color: #999999;
            margin-top: 20px;
        }

        .highlight {
            font-weight: bold;
        }
    </style>

</head>

<body>
    <div class="container">
        <div class="message">Application Confirmation</div>
        <div class="body">
            <p>Dear ${name},</p>
            <p>Thank you for applying for the position of <span class="highlight">"${position}"</span> at our company. We appreciate your interest in joining our team.</p>
            <p>Your application has been received successfully and is currently under review. Our team will contact you shortly if your qualifications align with our needs for the next steps in the hiring process.</p>
            <p>In the meantime, please feel free to explore more about our company and the exciting opportunities we offer by visiting our website.</p>
            <a class="cta" href="https://example.com/careers">Explore Careers</a>
        </div>
        <div class="support">Should you have any questions or need further assistance, please do not hesitate to reach out to us at <a href="mailto:info@example.com">info@example.com</a>. We are here to assist you!</div>
    </div>
</body>
    
    </html>`;
  };