import React from "react";

import InputField from "../inputField/inputField";

const InputForm = ({ formSchema, register, errors, onChange }) => (
  <>
    <p className="form-top-text">{formSchema.title}</p>
    {formSchema.form.map((input, index) => (
      <InputField
        onChange={onChange}
        name={input.name}
        type={input.type}
        logo={input.logo}
        placeHolder={input.placeholder}
        register={register}
        errors={errors}
        key={index}
        label={input.label}
        required={input.required}
        props={input}
      />
    ))}

    <button className="form-submit-btn" type="submit">
      {formSchema.btn}
    </button>
  </>
);

export default InputForm;
