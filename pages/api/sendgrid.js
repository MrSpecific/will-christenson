import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log('REQ.BODY', req.body);
    // const msg = {
    //   to: 'william.christenson@gmail.com', // Your email where you'll receive emails
    //   // from: 'william.christenson@gmail.com', // your website email address here
    //   from: 'will@dangercode.net', // your website email address here
    //   subject: `${req.body.subject}`,
    //   html: `<div><h2>Form Submission</h2>${JSON.stringify(req.body)}</div>`,
    // };

    const msg = {
      from: 'will@dangercode.net',
      template_id: 'd-6f3a04c78ce74ca98f47ebec0e1c14a5',
      subject: `${req.body.subject}`,
      personalizations: [
        {
          to: { email: 'william.christenson@gmail.com' },
          dynamic_template_data: {
            subject: `Contact form submission: ${req.body.subject}`,
            name: req.body.fullname,
            message: req.body.message,
          },
        },
      ],
    };

    await sendgrid.send(msg);
  } catch (error) {
    console.log(error, sendgrid);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
