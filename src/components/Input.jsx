import React from "react";

const Input = ({ value, placeholder, type, id, name, onChange }) => {
  return (
    <input
      required
      className="h-10 w-full border rounded-md p-1 outline-none mt-3"
      placeholder={placeholder}
      type={type}
      value={value}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
