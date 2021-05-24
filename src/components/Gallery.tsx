import React from "react";
import { createUseStyles } from "react-jss";

type GalleryProps = {
  images: string[];
};

const useStyles = createUseStyles({
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "0.25rem",
    color: "red",

    "& img": {
      width: "100%",
    },
  },
});

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const styles = useStyles();
  return (
    <div className={styles.gallery}>
      {images.map((image: string) => (
        <img src={image} alt="" title="" key={image} />
      ))}
    </div>
  );
};
