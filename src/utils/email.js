const transporter = require('../config/mail');


const sendMail = async({to, subject, text, html})=>{
  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL || "no-replay@example.com",
    to,
    subject,
    text,
    html
  })
  return sendMail;
}

module.exports = {sendMail};