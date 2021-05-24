import React from "react";
import { createUseStyles } from "react-jss";

type AlertType = "normal" | "error";
type AlertProps = {
  type?: AlertType;
  title?: string;
  message?: string;
};

const useStyles = createUseStyles({
  alert: {
    border: (type: AlertType) => type === "error" ? "1px solid #f5c2c7" : "none",
    color: (type: AlertType) => type === "error" ? "#842029" : "black",
    backgroundColor: (type: AlertType) => type === "error" ? "#f8d7da" : "#f1f1f1",
    padding: "1rem",
    marginBottom: '1rem'
  },
  alertTitle: {
    fontSize: "1rem",
    textAlign: "center",
    margin: 0,
  },
  alertMessage: {
    fontSize: "1rem",
    textAlign: "center",
    margin: 0,
  },
});

export const Alert: React.FC<AlertProps> = ({
  type = "normal",
  title,
  message,
}) => {
  const styles = useStyles(type);
  return (
    <div className={styles.alert}>
      {title && <h2 className={styles.alertTitle}>{title}</h2>}
      {message && <h3 className={styles.alertMessage}>{message}</h3>}
    </div>
  );
};
