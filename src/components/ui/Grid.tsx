import React from "react";
import { createUseStyles } from "react-jss";

type GridProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles({
  grid: {
    display: "flex",
  },
});

export const Grid: React.FC<GridProps> = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.grid}>{children}</div>;
};
