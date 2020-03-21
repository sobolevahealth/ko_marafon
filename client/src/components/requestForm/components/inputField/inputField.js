import React from "react";
import "./inputField.scss";
import SelectInput from "../selectInput/selectInput";

const InputField = ({
  name,
  placeHolder,
  type,
  register,
  label,
  errors,
  logo,
  props
}) => (
  <div className={`input-field ${name}-input`}>
    {label && <label htmlFor={name}>{label}</label>}
    {logo && (
      <div className="input-logo-container">
        <img className="input-logo" src={logo} alt="img-logo" />
      </div>
    )}
    {type === "select" ? (
      <SelectInput
        errors={errors}
        register={register}
        name={name}
        placeHolder={placeHolder}
        props={props}
      />
    ) : (
      <input
        className={`form-input ${errors[name] ? "error" : ""}`}
        name={name}
        placeholder={placeHolder}
        type={type}
        ref={register({ required: true })}
        {...props}
      />
    )}
  </div>
);

export default InputField;
