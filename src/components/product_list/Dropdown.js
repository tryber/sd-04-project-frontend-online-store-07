import React from 'react';

class Dropdown extends React.Component {
  render() {
    return (
      <div>
        <select defaultValue={"DEFAULT"} >
          <option value="DEFAULT" disable="true">Ordenação por preço</option>
          { this.props.children }
        </select>
      </div>
    );
  }
}

export default Dropdown;
