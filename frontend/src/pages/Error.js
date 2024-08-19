import React from 'react';

const Error = () => {
  const styles = {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#282c34',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
    },
    errorCode: {
      fontSize: '6rem',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '20px',
    },
    errorMessage: {
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    suggestion: {
      fontSize: '1rem',
      color: '#fff',
    },
    homeButton: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#ea0000',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.errorCode}>404</div>
      <div style={styles.errorMessage}>Page Not Found</div>
      <div style={styles.suggestion}>
        Oops! The page you are looking for does not exist.
      </div>
      <a href="/" style={styles.homeButton}>
        Go Back Home
      </a>
    </div>
  );
};

export default Error;