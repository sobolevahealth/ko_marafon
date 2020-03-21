import React from "react";
import "./stepsToRequest.scss";
import { useSelector } from "react-redux";
//STORE:
import { selectStepToRequest } from "Store/selectors/requestForm";

const StepsToRequest = () => {
  const requestStep = useSelector(selectStepToRequest);

  return (
    <div className="steps-to-request">
      {[...Array(4)].map((step, index) => (
        <div
          className={`step-item ${
            requestStep === index + 1 || requestStep === index + 2
              ? "active"
              : ""
          }`}
          key={index}
        >
          {requestStep === index + 2 ? (
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
