import { useState } from 'react';

const FormInput = ({ type = 'text', name, label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {type === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} />
      )}
    </div>
  );
};

const ContactForm = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState('Send');

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

    setButtonText('Sending');
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      setShowFailureMessage(true);
      return;
    }

    setButtonText('Send');
    console.log(fullname, email, subject, message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        type="name"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
        name="fullname"
        label="Name"
      />
      <FormInput
        type="email"
        name="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        // onBlur={handleBlur}
        value={email}
        label="Email address"
      />
      <FormInput
        type="text"
        name="subject"
        onChange={(e) => {
          setSubject(e.target.value);
        }}
        // onBlur={handleBlur}
        value={subject}
        label="Subject"
      />
      <FormInput
        type="textarea"
        name="message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        // onBlur={handleBlur}
        value={message}
        label="Message"
      />
      <button type="submit">{buttonText}</button>
      {showFailureMessage && <h2>Failed to send</h2>}
    </form>
  );
};

export default ContactForm;
