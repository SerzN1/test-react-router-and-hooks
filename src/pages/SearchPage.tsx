import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { SearchResults } from "../components/SearchResults";
import { SearchForm } from "../components/SearchForm";
import { Alert } from "../components/ui/Alert";
import { Title } from "../components/ui/Title";
import { useGroceries } from "../api/groceries";
import { useQuery } from "../hooks/useQuery";
import { groceriesDataAdapter } from "../api/groceriesUtils";
import { useDebounce } from "../hooks/useDebounce";

export const SearchPage: React.FC = () => {
  const history = useHistory();
  const query = useQuery();
  const q = query.get("q") || undefined;
  const handleSearch = (q: string) => {
    history.push(q ? `?q=${q}` : "/");
  };
  const debouncedQ = useDebounce(q, 300);
  const { isLoading, error, data } = useGroceries(debouncedQ)
  const searchItems = useMemo(() => groceriesDataAdapter(data), [data]);

  return (
    <div>
      <Title>Search Grocery</Title>
      <SearchForm value={q} handleSearch={handleSearch} isLoading={isLoading} />
      {!q ?? <Alert title="Type something in to find groceries" />}
      {error ? <Alert type="error" title={error.toString()} /> : null}
      {searchItems.length ? <SearchResults items={searchItems} /> : null}
      {!searchItems.length && !isLoading && !error ? (
        <Alert title="We were searching everywhere but nothing is found" />
      ) : null}
    </div>
  );
};
