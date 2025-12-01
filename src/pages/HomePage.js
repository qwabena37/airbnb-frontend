import React from "react";

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Jay AirBnB</h1>
      <p style={styles.subtitle}>
        Discover amazing places to stay, unique homes, and unforgettable experiences.
      </p>
      <button style={styles.button} onClick={() => window.location.href="/properties"}>
        Browse Properties
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "4rem 2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: "linear-gradient(135deg, #ff5a5f, #f7b733)",
    color: "white",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    maxWidth: "600px",
  },
  button: {
    backgroundColor: "white",
    color: "#ff5a5f",
    border: "none",
    padding: "1rem 2rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    borderRadius: "30px",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s ease",
  }
};

export default HomePage;
