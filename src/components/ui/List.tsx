import React from "react";
import { createUseStyles } from "react-jss";

type ListProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles({
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0
  },
});

export const List: React.FC<ListProps> = ({ children }) => {
  const styles = useStyles();
  return <ul className={styles.list}>{children}</ul>;
};
