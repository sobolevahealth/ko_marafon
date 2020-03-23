import React from "react";
import "./selectInput.scss";

const SelectInput = ({
  name,
  placeHolder,
  register,
  errors,
  props,
  onChange
}) => (
  <select
    name={name}
    className={`form-input ${errors[name] ? "error" : ""}`}
    ref={register({ required: true })}
    onChange={e => onChange({ [name]: e.target.value })}
  >
    <option disabled value="" selected className="form-input-select">
      {placeHolder}
    </option>
    {props.options.map((option, index) => (
      <option key={index} value={option} className="form-input-select">
        {option}
      </option>
    ))}
  </select>
);

export default SelectInput;
