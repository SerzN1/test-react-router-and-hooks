import React from "react";
import { createUseStyles } from "react-jss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { PageRoutes } from "./PageRoutes";

const useStyles = createUseStyles({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    backgroundColor: "#282c34",
    fontSize: "calc(1rem + 2vmin)",
    color: "white",
    padding: "1rem 2rem",
  },
  headerTitle: {
    textDecoration: "none",
    color: "white",
  },
  main: {
    flexGrow: 1,
    padding: "1rem 2rem",
  },
  footer: {
    backgroundColor: "#282c34",
    textAlign: "center",
    padding: "1rem 2rem",
    color: "white",
  },
});

function App() {
  const styles = useStyles();

  return (
    <Router>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/" className={styles.headerTitle}>
            Groceries catalogue
          </Link>
        </header>
        <main className={styles.main}>
          <PageRoutes />
        </main>
        <footer className={styles.footer}>
          &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}

export default App;
