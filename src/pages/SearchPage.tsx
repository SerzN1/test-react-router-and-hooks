import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import { SearchResults } from "../components/SearchResults";
import { SearchForm } from "../components/SearchForm";
import { Alert } from "../components/ui/Alert";
import { Title } from "../components/ui/Title";
import { useGroceries } from "../api/groceries";
import { useQuery } from "../hooks/useQuery";
import { groceriesDataAdapter } from "../api/groceriesUtils";
import { Loader } from "../components/Loader";

export const SearchPage: React.FC = () => {
  const history = useHistory();
  const query = useQuery();
  const q = query.get("q") || undefined;
  const handleSearch = (q: string) => {
    history.push(q ? `?q=${q}` : "/");
  };
  const { isLoading, error, data } = useGroceries(q);
  const searchItems = useMemo(() => groceriesDataAdapter(data), [data]);

  return (
    <div>
      <Title>Search Grocery</Title>
      <SearchForm defaultValue={q} handleSearch={handleSearch} />
      {q ? null : <Alert title="Type something in to find groceries" />}
      <Loader error={error} isLoading={isLoading}>
        {searchItems.length ? (
          <SearchResults items={searchItems} />
        ) : (
          <Alert title="We were searching everywhere but nothing is found" />
        )}
      </Loader>
    </div>
  );
};
