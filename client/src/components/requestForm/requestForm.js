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
import {
  selectStepToRequest,
  selectSentData
} from "Store/selectors/requestForm";
//ACTION
import {
  setRequestForm,
  setSentData,
  setDoneStep
} from "Store/actions/requestForm";
//MODELS
import { formSchema } from "Model/requestForm";

const RequestForm = () => {
  const [success, setSuccess] = useState(false);
  const requestStep = useSelector(selectStepToRequest);
  const sentData = useSelector(selectSentData);
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const setData = data => {
    dispatch(setSentData(data));
  };

  const onSubmit = async (data, e) => {
    e.preventDefault();

    dispatch(setDoneStep({ [`step_${requestStep}`]: true }));

    if (requestStep === 4) {
      await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sentData)
      }).then(data => {
        setSuccess(true);
      });
    } else {
      dispatch(setRequestForm({ step: requestStep + 1 }));
    }
  };

  const closeSuccess = () => {
    setSuccess(false);
    dispatch(setRequestForm({ step: 1 }));

    for (let i = 1; i < 5; i++) {
      dispatch(setDoneStep({ [`step_${i}`]: false }));
    }
  };

  return (
    <div className="request-form-container">
      {!success && (
        <form className="request-form" onSubmit={handleSubmit(onSubmit)}>
          {requestStep === 2 || requestStep === 3 ? (
            <RangeForm
              formSchema={formSchema[requestStep - 1]}
              onChange={setData}
            />
          ) : (
            <InputForm
              onChange={setData}
              register={register}
              errors={errors}
              formSchema={formSchema[requestStep - 1]}
            />
          )}
        </form>
      )}
      {success && (
        <>
          <p className="success-form">
            Спасибо, ваша заявка принята! <br />
            <br />
            Ждите приглашения в Telegram, где будут высланы дальнейшие
            инструкции
          </p>
          <button className="form-submit-btn" onClick={closeSuccess}>
            Хорошо
          </button>
        </>
      )}
    </div>
  );
};

export default RequestForm;
