import React from 'react';

const Team = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Our Team</h1>
      <p style={styles.text}>
        Meet the talented individuals who make up our team. Each member brings their unique skills and experience to help drive our company forward.
      </p>
      <div style={styles.teamMembers}>
        <div style={styles.memberCard}>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Team Member"
            style={styles.memberImage}
          />
          <h2 style={styles.memberName}>John Doe</h2>
          <p style={styles.memberRole}>CEO</p>
          <p style={styles.memberBio}>
            John is the visionary leader behind our company. With years of experience in the industry, he drives our strategic direction and growth.
          </p>
        </div>
        <div style={styles.memberCard}>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Team Member"
            style={styles.memberImage}
          />
          <h2 style={styles.memberName}>Jane Smith</h2>
          <p style={styles.memberRole}>CTO</p>
          <p style={styles.memberBio}>
            Jane leads our technology team with a passion for innovation. She oversees the development of our products and ensures technical excellence.
          </p>
        </div>
        <div style={styles.memberCard}>
          <img
            src="https://via.placeholder.com/150" // Replace with actual image URL
            alt="Team Member"
            style={styles.memberImage}
          />
          <h2 style={styles.memberName}>Alice Johnson</h2>
          <p style={styles.memberRole}>Marketing Director</p>
          <p style={styles.memberBio}>
            Alice drives our marketing strategies and initiatives. Her creativity and strategic vision help us connect with our audience and grow our brand.
          </p>
        </div>
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
  teamMembers: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  memberCard: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '15px',
  },
  memberName: {
    fontSize: '1.5rem',
    color: '#282c34',
    marginBottom: '10px',
  },
  memberRole: {
    fontSize: '1.2rem',
    color: '#ea0000',
    marginBottom: '15px',
  },
  memberBio: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default Team;
