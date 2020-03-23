import React from "react";

import InputField from "../inputField/inputField";

const InputForm = ({ formSchema, register, errors, onChange, requestStep }) => (
  <>
    <p className="form-top-text">{formSchema.title}</p>
    {requestStep === 4 && (
      <p className="form-checkboxes-text">
        Отметь аллергии/непереносимости или продукты, которые не употребляешь
        совсем{" "}
      </p>
    )}

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
