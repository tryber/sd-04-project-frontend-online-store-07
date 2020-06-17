import React, { Component } from "react";
import * as api from "../../services/api";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: '',
    };

    this.CheckInput = this.CheckInput.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((results) => this.setState({ categories: results }));
  }

  CheckInput(elem) {
    return (
      <p>
        <label>
          <input type="checkbox" id={elem.id} value={elem.name} />
          {elem.name}
        </label>
      </p>
    );
  }

  render() {
    const { categories } = this.state;
    if (!categories) return <span>Loading...</span>;
    return (
      <div>
        {categories.map((elem) => (this.CheckInput(elem)))}
      </div>
    );
  }
}

export default Categories;
