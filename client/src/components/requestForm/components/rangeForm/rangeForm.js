import React from "react";
import RangeInput from "../rangeInput/rangeInput";
import { useSelector } from "react-redux";

//STORE:
import { selectSentData } from "Store/selectors/requestForm";

const RangeForm = ({ formSchema, onChange }) => {
  const sentData = useSelector(selectSentData);

  return (
    <>
      <p className="form-top-text">{formSchema.title}</p>
      {formSchema.form.map((input, index) => (
        <RangeInput
          onChange={onChange}
          key={index}
          name={input.name}
          measure={input.measure}
          label={input.label}
          minValue={input.minValue}
          maxValue={input.maxValue}
          value={sentData[input.name]}
        />
      ))}

      <button className="form-submit-btn" type="submit">
        {formSchema.btn}
      </button>
    </>
  );
};

export default RangeForm;
