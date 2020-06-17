import React from 'react';

class Search extends React.Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <div>
        <label htmlFor="searchBar">
          <input type="text" name="searchBar" data-testid="query-input" value={value} placeholder="pesquisar" onChange={onChange} />
        </label>
        <button type="button" data-testid="query-button" onClick={onClick}>Buscar</button>
      </div>
    );
  }
}

export default Search;
