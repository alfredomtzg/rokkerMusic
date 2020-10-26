/* eslint-disable no-console */
import React, { useState } from "react";
import "../../assets/fonts/coolicons.css";
import { SearchButton } from "../Buttons";
import {
  FormContainer,
  SearchInput,
  StyledSearchBar,
} from "../Forms/light-styles";

export default function SearchBar() {
  // Search Values
  const [valuesSearch, setValuesSearch] = useState({
    searchInput: "",
  });
  // function handleChange to Search
  const handleChangeSearch = (event) => {
    setValuesSearch({
      ...valuesSearch,
      [event.target.name]: event.target.value,
    });
  };

  // Function HandleSubmitSearch
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    console.log(valuesSearch);
  };

  return (
    <FormContainer onSubmit={handleSubmitSearch}>
      <StyledSearchBar>
        <SearchInput
          id="searchInput"
          type="search"
          name="searchInput"
          value={valuesSearch.searchInput}
          onChange={handleChangeSearch}
        />
        <SearchButton />
      </StyledSearchBar>
    </FormContainer>
  );
}
