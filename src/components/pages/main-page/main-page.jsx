import React from "react";
import About from "/src/components/blocks/about/about";
import AdvantagesList from "/src/components/blocks/advantages-list/advantages-list";

function MainPage({ advantages }) {
  return (
    <>
      <About />
      <AdvantagesList advantages={advantages} />
    </>
  );
}

export default MainPage;
