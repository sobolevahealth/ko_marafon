import React from "react";
import "style/homePage.scss";
import TopBlock from "Components/homePageComponents/topBlock/topBlock";
import Header from "Components/header/header";

const HomePage = () => {
  return (
    <div className="home-page-content">
      <Header />
      <TopBlock />
    </div>
  );
};

export default HomePage;
