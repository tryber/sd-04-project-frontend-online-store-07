import React from 'react';

class AddAndDecrease extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <div>
        <button type="button" className="add-button" onClick={() => callback('dec')}>-</button>
        <span className="show-value">{value}</span>
        <button type="button" className="add-button" onClick={() => callback('add')}>+</button>
      </div>
    );
  }
}

export default AddAndDecrease;
