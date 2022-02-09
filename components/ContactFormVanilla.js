import { useState } from 'react';
import styles from '@styles/components/ContactForm.module.css';

const FormInput = ({ type = 'text', name, label, value, onChange }) => {
  return (
    <div className="input-wrapper">
      {type === 'textarea' ? (
        <textarea name={name} value={value} onChange={onChange} />
      ) : (
        <input type={type} name={name} value={value} onChange={onChange} placeholder={label} />
      )}
      <label htmlFor={name}>{label}</label>
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

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    // setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (!isValidForm) {
      return;
    }

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
    <form onSubmit={handleSubmit} className={styles.contactForm}>
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
      <div className="form-actions">
        <div className={styles.formMessages}>{showFailureMessage && <h2>Failed to send</h2>}</div>
        <button
          type="submit"
          className="button"
          disabled={Object.entries(errors).length > 0}
          aria-live="polite"
        >
          {buttonText}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
