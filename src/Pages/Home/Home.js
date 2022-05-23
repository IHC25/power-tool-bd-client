import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Reviews></Reviews>
      <BusinessSummary></BusinessSummary>
      <Contact></Contact>
    </div>
  );
};

export default Home;
