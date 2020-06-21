import React from 'react';
import FormInput from '../_general/FormInput';
import '../../style/Body.css';
import { Button, Container } from '../../style/style.js'

class Search extends React.Component {
  render() {
    const { value, onChange, onClick } = this.props;
    return (
      <Container>
        <div>
          <FormInput
          label=""
          name="searchBar"
          test="query-input"
          value={value}
          holder="Pesquisar"
          onChange={onChange}
          className="search-input"
        />
        </div>
        <div>
          <Button
          search
          type="button"
          data-testid="query-button"
          onClick={onClick}
          >
          <i class="fas fa-search"></i>
        </Button>
        </div>
      </Container>
    );
  }
}

export default Search;
