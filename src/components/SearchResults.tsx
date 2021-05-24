import React from "react";
import { Link } from "react-router-dom";
import { List } from "./ui/List";
import { ListItem } from "./ui/ListItem";
import { ListItemTitle } from "./ui/ListItemTitle";

type SearchResultsItem = {
  id: string;
  title: string;
  url: string;
};
type SearchResultsProps = {
  items: SearchResultsItem[];
};

export const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
  return (
    <List>
      {items.map(({ title, id, url }: SearchResultsItem) => {
        return (
          <ListItem key={id}>
            <ListItemTitle>{title}</ListItemTitle>
            <Link to={url}>View details</Link>
          </ListItem>
        );
      })}
    </List>
  );
};
