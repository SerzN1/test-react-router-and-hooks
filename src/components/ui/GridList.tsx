import React from "react";
import { createUseStyles } from "react-jss";

type GridListProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles({
  grid: {
    display: "flex",
    flexDirection: "column",
  },
});

export const Grid: React.FC<GridListProps> = ({ children }) => {
  const styles = useStyles();
  return <div className={styles.grid}>{children}</div>;
};
