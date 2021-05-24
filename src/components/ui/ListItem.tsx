import React from "react";
import { createUseStyles } from "react-jss";

type ListItemProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles({
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "1rem",

    "& + &": {
      marginTop: ".5rem",
    },

    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
});

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  const styles = useStyles();
  return <li className={styles.listItem}>{children}</li>;
};
