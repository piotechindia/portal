import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.text}>
        We would love to hear from you! If you have any questions or inquiries, please feel free to reach out to us using the contact information below.
      </p>
      <div style={styles.contactInfo}>
        <h2 style={styles.subHeader}>Our Address</h2>
        <p style={styles.text}>1234 Elm Street, Suite 567, Anytown, USA</p>
        <h2 style={styles.subHeader}>Email Us</h2>
        <p style={styles.text}>support@example.com</p>
        <h2 style={styles.subHeader}>Call Us</h2>
        <p style={styles.text}>+1 (234) 567-8901</p>
      </div>
      <div style={styles.formContainer}>
        <h2 style={styles.subHeader}>Send Us a Message</h2>
        <form style={styles.form}>
          <label style={styles.label}>
            Name:
            <input type="text" style={styles.input} />
          </label>
          <label style={styles.label}>
            Email:
            <input type="email" style={styles.input} />
          </label>
          <label style={styles.label}>
            Message:
            <textarea style={styles.textarea} />
          </label>
          <button type="submit" style={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1280px',
    margin: '0 auto',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2.5rem',
    color: '#ea0000',
    marginBottom: '20px',
    textAlign: 'center',
  },
  text: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  contactInfo: {
    marginBottom: '30px',
  },
  subHeader: {
    fontSize: '2rem',
    color: '#282c34',
    marginBottom: '15px',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    height: '150px',
  },
  button: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#ea0000',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
};

export default Contact;
