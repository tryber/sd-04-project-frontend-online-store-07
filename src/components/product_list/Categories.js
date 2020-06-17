import React, { Component } from 'react';
import * as api from '../../services/api';

function CheckInput(elem) {
  return (
    <p>
      <label htmlFor={elem.id}>
        <input type="radio" id={elem.id} name="categorie" value={elem.name} />
        {elem.name}
      </label>
    </p>
  );
}

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { categories: '' };
  }

  componentDidMount() {
    api.getCategories().then((results) => this.setState({ categories: results }));
  }

  render() {
    const { categories } = this.state;
    if (!categories) return <span>Loading...</span>;
    return (
      <div>
        {categories.map((elem) => {
          return CheckInput(elem);
        })}
      </div>
    );
  }
}

export default Categories;
