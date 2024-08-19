import React from 'react';

const Portfolio = () => {
  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.5rem',
      color: '#ea0000',
      marginBottom: '10px',
    },
    description: {
      fontSize: '1.2rem',
      color: '#333',
    },
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
    },
    item: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      flex: '1 1 calc(33.333% - 20px)', // Responsive width for grid items
      boxSizing: 'border-box',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    content: {
      padding: '20px',
    },
    projectTitle: {
      fontSize: '1.5rem',
      color: '#282c34',
      marginBottom: '10px',
    },
    projectDescription: {
      fontSize: '1rem',
      color: '#555',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Portfolio</h1>
        <p style={styles.description}>
          Check out some of our recent projects and accomplishments.
        </p>
      </header>
      
      <section style={styles.grid}>
        <div style={styles.item}>
          <img src="https://via.placeholder.com/400" alt="Project 1" style={styles.image}/>
          <div style={styles.content}>
            <h2 style={styles.projectTitle}>Project 1</h2>
            <p style={styles.projectDescription}>
              A brief description of the project goes here. Highlight the key features and outcomes.
            </p>
          </div>
        </div>
        <div style={styles.item}>
          <img src="https://via.placeholder.com/400" alt="Project 2" style={styles.image}/>
          <div style={styles.content}>
            <h2 style={styles.projectTitle}>Project 2</h2>
            <p style={styles.projectDescription}>
              A brief description of the project goes here. Highlight the key features and outcomes.
            </p>
          </div>
        </div>
        <div style={styles.item}>
          <img src="https://via.placeholder.com/400" alt="Project 3" style={styles.image}/>
          <div style={styles.content}>
            <h2 style={styles.projectTitle}>Project 3</h2>
            <p style={styles.projectDescription}>
              A brief description of the project goes here. Highlight the key features and outcomes.
            </p>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </section>
    </div>
  );
};

export default Portfolio;
