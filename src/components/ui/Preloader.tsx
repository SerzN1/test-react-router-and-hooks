import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  preloader: {
    height: (size: number | string) => (typeof size === "number") ? `${size}px` : size,
    width: (size: number | string) => typeof size === "number" ? `${size}px` : size,

    "&:before": {
      content: '""',
      width: "100%",
      height: "100%",
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

type useStylesProps = {
    size?: number | string;
};

export const Preloader: React.FC<useStylesProps> = ({ size = "2rem"}) => {
  const styles = useStyles(size);
  return <div className={styles.preloader} />;
};
