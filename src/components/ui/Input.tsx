import React from "react";
import { createUseStyles } from "react-jss";

type InputProps = {
  defaultValue?: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  ref?: React.Ref<any>;
};

const useStyles = createUseStyles({
  input: {
    border: "1px solid black",
    padding: ".5rem",
    flexGrow: 1,
  },
});

export const Input: React.FC<InputProps> = React.forwardRef<
  HTMLInputElement,
  InputProps
>(({ defaultValue, value, type = "text", onChange }, ref) => {
  const styles = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === "function") {
      onChange(event.target.value);
    }
  };
  return (
    <input
      ref={ref}
      className={styles.input}
      type={type}
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
    />
  );
});
