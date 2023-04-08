import React from 'react';
import PropTypes from 'prop-types';

export default function LabelAndRadio({
  checked,
  className,
  id,
  label,
  name,
  onChange,
  value,
}) {
  return (
    <>
      <label htmlFor={id} className="screen-readers-only">
        {label}
      </label>
      <input
        value={value}
        type="radio"
        onChange={onChange}
        name={name}
        id={id}
        className={className}
        checked={checked}
      />
    </>
  );
}

LabelAndRadio.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.number.isRequired,
};

LabelAndRadio.defaultProps = {
  className: null,
  onChange: null,
};
