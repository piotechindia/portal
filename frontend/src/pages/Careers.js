import React from 'react';

const Careers = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Careers</h1>
      <p style={styles.text}>
        Explore exciting career opportunities with us. We are always looking for passionate and talented individuals to join our team. If you're looking to be part of a dynamic and innovative company, you’ve come to the right place!
      </p>
      <div style={styles.jobListings}>
        <h2 style={styles.subHeader}>Current Openings</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <h3 style={styles.jobTitle}>Software Engineer</h3>
            <p style={styles.jobDescription}>
              Work on cutting-edge technologies to develop scalable and efficient software solutions. Join a team that values creativity and collaboration.
            </p>
          </li>
          <li style={styles.listItem}>
            <h3 style={styles.jobTitle}>Product Manager</h3>
            <p style={styles.jobDescription}>
              Lead the development of innovative products and strategies. Collaborate with cross-functional teams to drive product success and growth.
            </p>
          </li>
          <li style={styles.listItem}>
            <h3 style={styles.jobTitle}>UX Designer</h3>
            <p style={styles.jobDescription}>
              Design intuitive and engaging user experiences. Work closely with our development team to create designs that delight our users.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1280px',
    margin: '0 auto',
    // borderRadius: '8px',
    // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    height: '100dvh',
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
  jobListings: {
    marginTop: '20px',
  },
  subHeader: {
    fontSize: '2rem',
    color: '#282c34',
    marginBottom: '15px',
    textAlign: 'center',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    marginBottom: '15px',
  },
  jobTitle: {
    fontSize: '1.5rem',
    color: '#ea0000',
    marginBottom: '10px',
  },
  jobDescription: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default Careers;
