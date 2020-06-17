import React from 'react';

const FormInput = ({
  name,
  label,
  test,
  type,
  value,
  className,
  caracters
}) => (

  <div>
    <label htmlFor={name}>
      {label}
      <input
        data-testid={test}
        id={name}
        type={type}
        value={value}
        className={className}
        maxLength={caracters}
      />
    </label>
  </div>

);

FormInput.defaultProps = {
  type: "text",
  className: "inputUser"
};

export default FormInput;
