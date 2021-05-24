import React from "react";
import { createUseStyles } from "react-jss";
import { Alert } from './ui/Alert'
import { Preloader } from '../components/ui/Preloader'

type LoaderProps = {
  error: Error | string | null;
  isLoading: boolean;
  children: React.ReactNode;
};

const useStyles = createUseStyles({
    loader: {
        display: 'block'
    }
})

export const Loader: React.FC<LoaderProps> = ({ error, isLoading, children }) => {
    const styles = useStyles()

  if (error) return <Alert title={error.toString()} />;
  if (isLoading) return <Preloader />;

  return (
      <div className={styles.loader}>{children}</div>
  );
};
