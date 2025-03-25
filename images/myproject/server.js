const nodemailer = require("nodemailer");

async function sendOrderConfirmationEmail(customerData) {
    // Create transporter using Gmail service
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',  // Your Gmail address
            pass: 'your-email-password'    // Your Gmail password (or app-specific password)
        }
    });

    // Create email options with dynamic data
    let mailOptions = {
        from: 'kolyrahman84@gmail.com',               // Your Gmail address
        to: customerData.email,                     // Customer's email address dynamically
        subject: 'Order Confirmation',              // Subject of the email
        text: `Dear ${customerData.name},\n\n` +    // Personalized greeting
              `Thank you for your order! We have received your order details and will process it shortly.\n\n` +
              `Order Details:\n` +
              `Name: ${customerData.name}\n` +
              `Phone: ${customerData.phone}\n` +
              `Email: ${customerData.email}\n\n` +
              `We will notify you once the order has been shipped.\n\n` +
              `Best regards,\n` +
              `Your Company Name`
    };

    try {
        // Send email using the transporter
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    } catch (error) {
        console.log("Error sending email: ", error);
    }
}
