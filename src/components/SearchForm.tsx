import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Preloader } from "./ui/Preloader";

type SearchFormProps = {
  method?: string;
  value?: string;
  isLoading?: boolean;
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
  value = "",
  isLoading = false,
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
      <Input
        value={value}
        ref={inputEl}
        type="search"
        onChange={handleSearch}
      />
      <Button type="submit">{isLoading ? <Preloader size={19} /> : "Search"}</Button>
    </form>
  );
};
