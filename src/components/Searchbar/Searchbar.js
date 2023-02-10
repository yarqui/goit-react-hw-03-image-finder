import {
  SearchBarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit, children }) => {
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log('e.currentTarget:', e.currentTarget.value);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
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
