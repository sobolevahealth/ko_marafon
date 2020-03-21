import React from "react";

import "./topBlock.scss";
import RequestForm from "Components/requestForm/requestForm";
import StepsToRequest from "Components/requestForm/components/stepsToRequest/stepsToRequest";

const TopBlock = () => (
  <div className="top-block-container">
    <img
      className="top-block-bg"
      src="img/home-page-bg.png"
      alt="Top Block"
      width="100%"
      height="100%"
    />
    <h1 className="top-block-title">Title</h1>
    <h2 className="top-block-subtitle">Subtitle</h2>
    <div className="top-block-request-form">
      <StepsToRequest />
      <RequestForm />
    </div>
  </div>
);

export default TopBlock;
