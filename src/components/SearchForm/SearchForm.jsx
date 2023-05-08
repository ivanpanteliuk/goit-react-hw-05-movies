import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import {
  Button,
  SearchForm,
  ButtonLabel,
  SearchInput,
  FormWrapper,
} from './SearchForm.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const formSubmitHandler = evt => {
    evt.preventDefault();

    if (query.trim() === '') return;

    onSubmit(query.trim());
    setQuery('');
  };

  const handleInputChange = evt => {
    setQuery(evt.target.value.toLowerCase());
  };

  return (
    <FormWrapper>
      <SearchForm onSubmit={formSubmitHandler}>
        <Button type="submit">
          <BsSearch size="24px" />
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
      </SearchForm>
    </FormWrapper>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
