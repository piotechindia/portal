import React from 'react';

const About = () => {
  const styles = {
    container: {
      padding: '50px 20px',
      maxWidth: '1280px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    header: {
      fontSize: '2.5rem',
      color: '#ea0000',
      marginBottom: '20px',
    },
    text: {
      fontSize: '1.2rem',
      color: '#333',
      lineHeight: '1.6',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '10px',
      margin: '20px 0',
    },
    sectionHeader: {
      fontSize: '2rem',
      color: '#282c34',
      marginBottom: '15px',
      marginTop: '30px',
    },
    sectionText: {
      fontSize: '1.1rem',
      color: '#555',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>
      <p style={styles.text}>
        Welcome to our company! We are committed to delivering the best products
        and services to our customers. Our journey started with a passion for
        innovation and a dedication to excellence, and today, we are proud to
        be a leader in our industry.
      </p>
      <img
        src="https://via.placeholder.com/800x400"  // Replace with an actual image URL
        alt="About Us"
        style={styles.image}
      />
      <h2 style={styles.sectionHeader}>Our Mission</h2>
      <p style={styles.sectionText}>
        Our mission is to create value for our customers through innovative
        solutions and exceptional service. We believe in the power of teamwork,
        integrity, and continuous improvement to achieve our goals.
      </p>
      <h2 style={styles.sectionHeader}>Our Vision</h2>
      <p style={styles.sectionText}>
        We envision a world where technology and innovation drive positive
        change, improving lives and transforming industries. Our vision guides
        our strategy and inspires us to push the boundaries of what is possible.
      </p>
      <h2 style={styles.sectionHeader}>Our Values</h2>
      <p style={styles.sectionText}>
        We value integrity, excellence, and customer satisfaction above all
        else. Our team is committed to upholding these values in everything we
        do, ensuring that our customers can trust us to deliver on our promises.
      </p>
    </div>
  );
};

export default About;
