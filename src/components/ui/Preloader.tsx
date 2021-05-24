import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  preloader: {
    height: "2rem",
    padding: "1rem",

    "&:before": {
      content: '""',
      width: "2rem",
      height: "2rem",
      display: "block",
      boxSizing: 'border-box',
      border: ".25rem solid black",
      borderTopColor: "white",
      borderRadius: "50%",
      margin: "0 auto",
      animation: "$rotate 1s ease-in-out infinite",
    },
  },
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

export const Preloader: React.FC = () => {
  const styles = useStyles();
  return <div className={styles.preloader} />;
};
