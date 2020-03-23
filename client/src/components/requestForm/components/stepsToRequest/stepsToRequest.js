import React from "react";
import "./stepsToRequest.scss";
import { useSelector } from "react-redux";
//STORE:
import {
  selectStepToRequest,
  selectStepDone
} from "Store/selectors/requestForm";

const StepsToRequest = () => {
  const requestStep = useSelector(selectStepToRequest);
  const done = useSelector(selectStepDone);

  return (
    <div className="steps-to-request">
      {[...Array(4)].map((step, index) => (
        <div
          className={`step-item ${
            done[`step_${index + 1}`] || requestStep === index + 1
              ? "active"
              : ""
          }`}
          key={index}
        >
          {done[`step_${index + 1}`] ? (
            <img
              className="step-done-img"
              src="img/requestForm/check.png"
              alt="done"
            />
          ) : (
            index + 1
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsToRequest;
