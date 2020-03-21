import React from "react";
import RangeInput from "../rangeInput/rangeInput";

const RangeForm = ({ formSchema }) => (
  <>
    <p className="form-top-text">{formSchema.title}</p>
    {formSchema.form.map((input, index) => (
      <RangeInput
        name={input.name}
        measure={input.measure}
        label={input.label}
        minValue={input.minValue}
        maxValue={input.maxValue}
      />
    ))}

    <button className="form-submit-btn" type="submit">
      {formSchema.btn}
    </button>
  </>
);

export default RangeForm;
