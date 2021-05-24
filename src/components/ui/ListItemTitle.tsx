import React from "react";
import { createUseStyles } from "react-jss";

type ListItemTitleProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles({
  listItemTitle: {
    fontSize: "1.25rem",
    margin: 0,
  },
});

export const ListItemTitle: React.FC<ListItemTitleProps> = ({ children }) => {
  const styles = useStyles();
  return <h3 className={styles.listItemTitle}>{children}</h3>;
};
