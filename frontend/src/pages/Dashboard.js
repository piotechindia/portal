import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const userValid = () => {
    let token = localStorage.getItem("userdbtoken");
    if (token) {
      console.log("user valid")
    } else {
      navigate("*")
    }
  }

  useEffect(() => {
    userValid();
  }, [])
  return (
    <div style={styles.container}>
      <>
            <h2 style={styles.header}>Welcome, User</h2>
            <p style={styles.text}><strong>Email:</strong> YourAddress@mail.com</p>
            <p style={styles.text}><strong>User Type:</strong> User</p>
            <p style={styles.text}><strong>Joined Date:</strong>10 Aug, 2024</p>
          </>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  header: {
    marginBottom: '20px',
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#ea0000',
  },
  text: {
    marginBottom: '10px',
    fontSize: '1.2rem',
  },
};

export default Dashboard