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
  required,
  onChange,
  props
}) => (
  <div className={`input-field ${name}-input ${type}`}>
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
        onChange={onChange}
      />
    ) : type === "textarea" ? (
      <textarea
        className={`form-input ${errors[name] ? "error" : ""}`}
        name={name}
        placeholder={placeHolder}
        ref={register({ required: required })}
        onChange={e => onChange({ [name]: e.target.value })}
      />
    ) : (
      <input
        className={`form-input ${errors[name] ? "error" : ""}`}
        name={name}
        placeholder={placeHolder}
        type={type}
        ref={register({ required: required })}
        onChange={e => onChange({ [name]: e.target.value })}
        {...props}
      />
    )}
  </div>
);

export default InputField;
