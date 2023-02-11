import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const normalizedQuery = form.elements.search.value.trim().toLowerCase();

    onSubmit(normalizedQuery);

    form.reset();
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarHeader>
  );
};

export default Searchbar;
