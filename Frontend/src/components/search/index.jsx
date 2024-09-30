import React from "react";
import { SearchContainer, SearchInput, SearchIconWrapper } from "./styles";
import { SearchIcon } from "../icons";

export const Search = () => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon fill="grey" />
      </SearchIconWrapper>
      <SearchInput type="text" placeholder="Search..." />
    </SearchContainer>
  );
};

export default Search;
