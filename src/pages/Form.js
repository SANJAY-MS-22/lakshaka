import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = [];

    if (name === '') {
      errors.push('Name is required.');
    }

    if (email === '') {
      errors.push('Email is required.');
    }

    if (password === '') {
      errors.push('Password is required.');
    }

    if (errors.length > 0) {
      setMessage(errors.join(' '));
    } else {
      setMessage('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br/>

        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br/>

        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br/>

        <button type="submit">Submit</button>
      </form>
      {message && <p className={message.includes('successfully') ? 'success' : 'error'}>{message}</p>}
    </div>
  );
}

export default Form;
