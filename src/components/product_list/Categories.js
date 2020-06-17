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

  CheckInput() {
    return (
      this.state.categories.map((elem) => ({
        <label>
          {elem.name}
          <input type="checkbox" id={elem.id} value={elem.name} />
        </label>
      }))
    );
  }

  render() {
    const { categories } = this.state;
    console.log(categories);
    return (
      <form>
        {this.CheckInput()}
      </form>
    );
  }
}

export default Categories;
