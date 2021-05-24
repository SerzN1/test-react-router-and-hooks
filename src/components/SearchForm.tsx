import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

type SearchFormProps = {
  method?: string;
  defaultValue?: string;
  handleSearch: (q: string) => void;
};

const useStyles = createUseStyles({
  form: {
    display: "flex",
    margin: "1rem 0",
  },
});

export const SearchForm: React.FC<SearchFormProps> = ({
  method = "post",
  defaultValue,
  handleSearch,
}) => {
  const styles = useStyles();
  const inputEl = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputEl.current) {
      handleSearch(inputEl.current.value);
    }
  };
  return (
    <form method={method} onSubmit={handleSubmit} className={styles.form}>
      <Input defaultValue={defaultValue} ref={inputEl} type="search" />
      <Button type="submit">Search</Button>
    </form>
  );
};
