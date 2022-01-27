import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: 'william.christenson@gmail.com', // Your email where you'll receive emails
      from: 'william.christenson@gmail.com', // your website email address here
      subject: `${req.body.subject}`,
      html: `<div><h2>Form Submission</h2>${JSON.stringify(req.body)}</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
