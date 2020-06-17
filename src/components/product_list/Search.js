import React from 'react';

class Search extends React.Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div>
        <label htmlFor="searchBar">
          <input
            type="text"
            name="searchBar"
            data-testid="query-input"
            value={value}
            placeholder="pesquisar"
            onChange={onChange}
            className="search-input"
          />
        </label>
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
