import React from "react";
import { createUseStyles } from "react-jss";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => any;
};

const useStyles = createUseStyles({
  button: {
    border: "1px solid black",
    fontWeight: "700",
    lineHeight: 1.5,
    padding: ".5rem 1rem",
    cursor: "pointer",
  },
});

export const Button: React.FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
}) => {
  const styles = useStyles();
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
