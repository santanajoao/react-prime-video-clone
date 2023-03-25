import React from 'react';

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
