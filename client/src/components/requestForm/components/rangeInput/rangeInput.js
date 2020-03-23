import React from "react";
import InputRange from "react-input-range";
//STYLE
import "react-input-range/lib/css/index.css";
import "./rangeInput.scss";

const RangeInput = ({
  name,
  label,
  maxValue,
  minValue,
  measure,
  value,
  onChange
}) => (
  <div className="range-field">
    <InputRange
      name={name}
      maxValue={maxValue}
      minValue={minValue}
      value={value}
      formatLabel={value => `${value}${measure}`}
      onChange={value => onChange({ [name]: value })}
    />
    <p className="range-label">{label}</p>
  </div>
);

export default RangeInput;
