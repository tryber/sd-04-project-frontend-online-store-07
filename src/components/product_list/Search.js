import React from 'react';
import FormInput from '../_general/FormInput';

class Search extends React.Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div>
        <FormInput
          label=""
          name="searchBar"
          test="query-input"
          value={value}
          holder="pesquisar"
          onChange={onChange}
          className="search-input"
        />
        <button
          type="button"
          data-testid="query-button"
          className="button-input"
          onClick={onClick}
        >
          Buscar
        </button>
      </div>
    );
  }
}

export default Search;
