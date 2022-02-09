import { useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';

import styles from '@styles/components/ContactForm.module.css';

const FormInput = ({ register, type = 'text', name, label }) => {
  return (
    <div className="input-wrapper">
      {type === 'textarea' ? (
        <textarea name={name} {...register} />
      ) : (
        <input type={type} name={name} placeholder={label} {...register} />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  //   Setting button text on form submission
  const [formState, setFormState] = useState('ready');
  const [buttonText, setButtonText] = useState('Send');

  const submitForm = async (data) => {
    setButtonText('Sending');
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      console.log(error);
      setShowFailureMessage(true);
      setButtonText('Send');
      return;
    }

    setFormState('success');
  };

  const formClass = classNames({
    [styles.contactForm]: true,
    [styles.formReady]: formState === 'ready',
    [styles.formComplete]: formState === 'success',
  });

  if (formState === 'success') {
    return <h3>Thanks for getting in touch, I&apos;ll get back to you soon!</h3>;
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className={formClass}>
      <FormInput
        type="text"
        register={register('fullname', { required: true })}
        name="fullname"
        label="Name"
      />
      {errors.fullname && `Name is required`}
      <FormInput
        type="email"
        register={register('email', { required: true })}
        name="email"
        label="Email address"
      />
      {errors.email && `Email is required`}
      <FormInput
        type="text"
        register={register('subject', { required: true })}
        name="subject"
        label="Subject"
      />
      {errors.subject && `Subject is required`}
      <FormInput
        type="textarea"
        register={register('message', { required: true })}
        name="message"
        label="Message"
      />
      {errors.message && `Message is required`}

      <div className="form-actions">
        {/* <div className={styles.formMessages}>{showFailureMessage && <h2>Failed to send</h2>}</div> */}
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
