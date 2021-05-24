import React from "react";
import { createUseStyles } from "react-jss";

type TitleProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles({
  title: {
    fontWeight: "700",
    margin: 0,
  },
});

export const Title: React.FC<TitleProps> = ({
  children,
}) => {
  const styles = useStyles();
  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  );
};

