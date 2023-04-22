import React, { useState } from 'react';

const ContactForm = () => {
    const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:example@domain.com?subject=Contact Form Submission&body=${email}`;
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsEmailValid(/\S+@\S+\.\S+/.test(inputEmail));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Enter your email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="example@example.com"
        required
      />
      <button type="submit" disabled={!isEmailValid}>
        Send
      </button>

      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        label {
          margin-bottom: 10px;
          font-weight: bold;
        }

        input[type="email"] {
          padding: 10px;
          border-radius: 5px;
          border: none;
          margin-bottom: 20px;
          width: 300px;
          font-size: 16px;
        }

        button {
          padding: 10px;
          border-radius: 5px;
          border: none;
          background-color: #005eff;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #0049b6;
        }
      `}</style>
    </form>
  );
};

export default ContactForm;
