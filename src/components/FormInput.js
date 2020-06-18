import React from 'react';

class FormInput extends React.Component {
  render() {
    const { name, label, test, type, value, className, caracters, onChange } = this.props;
    return (
      <div>
        <label htmlFor={name}>
          {label}
          <input
            data-testid={test}
            name={name}
            id={name}
            type={type}
            value={value}
            className={className}
            maxLength={caracters}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}

FormInput.defaultProps = {
  type: 'text',
  className: 'inputUser',
};

export default FormInput;
