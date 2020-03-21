import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
//COMPONENTS
import InputForm from "./components/inputForm/inputForm";
import RangeForm from "./components/rangeForm/rangeForm";
//STYLE
import "./requestForm.scss";
import "base_style/_placeholders.scss";
//STORE:
import { selectStepToRequest } from "Store/selectors/requestForm";
//ACTION
import { setRequestForm } from "Store/actions/requestForm";
//MODELS
import { formSchema } from "Model/requestForm";

const RequestForm = () => {
  const [success, setSuccess] = useState(false);
  const requestStep = useSelector(selectStepToRequest);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = async (data, e) => {
    e.preventDefault();

    if (requestStep === 4) {
      await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(data => {
        setSuccess(true);
      });
    } else {
      console.log(34744);
      dispatch(setRequestForm({ step: requestStep + 1 }));
    }
  };

  return (
    <div className="request-form-container">
      {!success && (
        <form className="request-form" onSubmit={handleSubmit(onSubmit)}>
          {requestStep === 2 || requestStep === 3 ? (
            <RangeForm formSchema={formSchema[requestStep - 1]} />
          ) : (
            <InputForm
              register={register}
              errors={errors}
              formSchema={formSchema[requestStep - 1]}
            />
          )}
        </form>
      )}
      {success && <p className="success-form">Спасибо!!!!</p>}
    </div>
  );
};

export default RequestForm;
