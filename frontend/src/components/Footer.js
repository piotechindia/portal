import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.section}>
          <h3 style={styles.title}>Company</h3>
          <ul style={styles.list}>
            <li><NavLink to="/about-us" style={styles.link}>About Us</NavLink></li>
            <li><NavLink to="/careers" style={styles.link}>Careers</NavLink></li>
            <li><NavLink to="/team" style={styles.link}>Team</NavLink></li>
            <li><NavLink to="/contact-us" style={styles.link}>Contact</NavLink></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Follow Us</h3>
          <ul style={styles.socialList}>
            <li><a href="#" rel="noopener noreferrer" style={styles.socialLink}>Facebook</a></li>
            <li><a href="#" rel="noopener noreferrer" style={styles.socialLink}>Twitter</a></li>
            <li><a href="#" rel="noopener noreferrer" style={styles.socialLink}>LinkedIn</a></li>
            <li><a href="#" rel="noopener noreferrer" style={styles.socialLink}>Instagram</a></li>
          </ul>
        </div>
        <div style={styles.section}>
          <h3 style={styles.title}>Contact Us</h3>
          <p style={styles.contactInfo}>1234 Elm Street, Suite 567, Anytown, USA</p>
          <p style={styles.contactInfo}>support@example.com</p>
          <p style={styles.contactInfo}>+1 (234) 567-8901</p>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.copyright}>© {new Date().getFullYear()} Portal by Piotech INDIA. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: '#fff',
    padding: '40px 20px 10px',
    fontSize: '0.9rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  section: {
    flex: '1',
    marginRight: '20px',
  },
  title: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#ea0000',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
  },
  socialList: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  socialLink: {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '8px',
  },
  contactInfo: {
    marginBottom: '8px',
  },
  bottomBar: {
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
  },
  copyright: {
    margin: '0',
  },
};

export default Footer;
